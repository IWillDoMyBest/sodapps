const express = require("express");
const http = require("http");
const handlebars = require("handlebars");
const fs = require("fs");

var app = express();
var port = 3000;
var server = http.createServer(app);

app.set("view engine", "hbs");
app.engine("html", require("hbs").__express);

app.use(express.static(__dirname + "/static"));

var index_route = require("./routes/index");
var food_route = require("./routes/food");
var schedule_route = require("./routes/schedule");
var project_route = require("./routes/project");

app.use("/", index_route);
app.use("/food", food_route);
app.use("/schedule", schedule_route);
app.use("/project", project_route);

app.get("*", (req, res) => {
	return res.send("<title>Error</title>Error 404, page not found. <a href='/'>Go back.</a>");
});

server.listen(port, () =>{
	console.log("Server is running on port " + port);
});
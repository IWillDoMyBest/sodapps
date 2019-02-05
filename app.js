const express = require("express");
const http = require("http");
const handlebars = require("handlebars");
const fs = require("fs");

var app = express();
var port = 3000;
var server = http.createServer(app);

var valid_key = "bondhon";

app.set("view engine", "hbs");
app.engine("html", require("hbs").__express);

app.use(express.static(__dirname + "/static"));

Date.prototype.getWeek = function() {
    var dt = new Date(this.getFullYear(),0,1);
    return Math.ceil((((this - dt) / 86400000) + dt.getDay()+1)/7);
};

var index_route = require("./routes/index");
var food_route = require("./routes/food");
var schedule_route = require("./routes/schedule");
var project_route = require("./routes/project");

app.use("/", index_route);
app.use("/food", food_route);
app.use("/schedule", schedule_route);
app.use("/project", project_route);

app.get("/api/:key", (req, res) => {
	var key = req.params.key;
	if (key != valid_key){
		return res.send("Invalid key");
	}
	fs.readFile("food.json", (err, data) => {
		if (err){
			return res.send(err);
		}
		return res.json(JSON.parse(data));
	});
});

app.get("*", (req, res) => {
	return res.send("<title>Error</title>Error 404, page not found. <a href='/'>Go back.</a>");
});

server.listen(port, () =>{
	console.log("Server is running on port " + port);
});
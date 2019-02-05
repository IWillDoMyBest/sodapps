const express = require("express");
const router = express.Router();
var fs = require("fs");



router.route("/")
	
	.get((req,res) => {

		var jsonFood = fs.readFileSync("food.json");
		var food = JSON.parse(jsonFood);

		var date = new Date();
		var week = date.getWeek();
		var day = date.getDay();
		var todaysFood = food[week][day];

		return res.render("index.hbs", {
			user: {
				"name": "Pierre",
				"class": "16_TEK_CS"
			},
			todaysFood
		});

	});

module.exports = router;
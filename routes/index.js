const express = require("express");
const router = express.Router();
const fs = require("fs");

var food = fs.readFile("food.json", (err, data) => {

	if (err){
		return (err);
	}
	
	return (data);

});

router.route("/")
	
	.get((req,res) => {

		return res.render("index.hbs", {
			user: {
				"name": "Pierre",
				"class": "16_TEK_CS"
			},
			food
		});

	});

module.exports = router;
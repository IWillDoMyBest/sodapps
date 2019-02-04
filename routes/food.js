const express = require("express");
const router = express.Router();

router.route("/")
	
	.get((req,res) => {

		return res.render("food.hbs", {
			obj: "hej"
		});

	});

module.exports = router;
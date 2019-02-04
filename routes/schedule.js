const express = require("express");
const router = express.Router();

router.route("/")
	
	.get((req,res) => {

		return res.render("schedule.hbs", {
			obj: "hej"
		});

	});

module.exports = router;
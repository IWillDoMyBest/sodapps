const express = require("express");
const router = express.Router();

router.route("/")
	
	.get((req,res) => {

		return res.render("project.hbs", {
			obj: "hej"
		});

	});

module.exports = router;
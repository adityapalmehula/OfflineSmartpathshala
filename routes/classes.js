var express = require('express');
var router = express.Router();
const data = require('./../course/data.json')
const classData = require('./../course/class.json')
const fs = require("fs");
var path = require('path');
const configConstants = require('./../constants/config');
var classPath = path.join(__dirname, '..', '/course/','class.json');

/* get all classes from  */
router.get('/', function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
	if (fs.existsSync(classPath)) {
		return res.status(200).send({ success: true, data:classData});
	}else{
		return res.status(500).send({ success: false, msg:"File Not Found !"});
	}
});

module.exports = router;

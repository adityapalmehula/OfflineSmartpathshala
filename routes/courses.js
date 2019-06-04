var express = require('express');
var router = express.Router();
const fs = require("fs");
var path = require('path');
const configConstants = require('./../constants/config');
// Courses data define -
const courseSix = require('./../course/courses/class6course.json');
const courseSeven = require('./../course/courses/class7course.json');
const courseEight = require('./../course/courses/class8course.json');
const courseNine = require('./../course/courses/class9course.json');
const courseTen = require('./../course/courses/class10course.json');

// Courses path define -
var classPathSix = path.join(__dirname, '..', '/course/','/courses/','class6course.json');
var classPathSeven = path.join(__dirname, '..', '/course/','/courses/','class7course.json');
var classPathEight = path.join(__dirname, '..', '/course/','/courses/','class8course.json');
var classPathNine = path.join(__dirname, '..', '/course/','/courses/','class9course.json');
var classPathTen = path.join(__dirname, '..', '/course/','/courses/','class10course.json');

//get courses by id 
router.get('/:id',function(req,res){
	debugger;
	try {
		let Id=req.params.id;
		var coursePath='';
		if(Id==configConstants.CLASS_CONSTANT[0]){
			if (fs.existsSync(classPathSix)) {
				return res.status(200).send({ success: true, data:courseSix});
			}else{
				return res.status(500).send({ success: false, msg:"File Not Found !"});
			}
		}else if(Id==configConstants.CLASS_CONSTANT[1]){
			if (fs.existsSync(classPathSeven)) {
				return res.status(200).send({ success: true, data:courseSeven});
			}else{
				return res.status(500).send({ success: false, msg:"File Not Found !"});
			}
		}else if(Id==configConstants.CLASS_CONSTANT[2]){
			if (fs.existsSync(classPathEight)) {
				return res.status(200).send({ success: true, data:courseEight});
			}else{
				return res.status(500).send({ success: false, msg:"File Not Found !"});
			}
		}else if(Id==configConstants.CLASS_CONSTANT[3]){
			if (fs.existsSync(classPathNine)) {
				return res.status(200).send({ success: true, data:courseNine});
			}else{
				return res.status(500).send({ success: false, msg:"File Not Found !"});
			}
		}else if(Id==configConstants.CLASS_CONSTANT[4]){
			if (fs.existsSync(classPathTen)) {
				return res.status(200).send({ success: true, data:courseTen});
			}else{
				return res.status(500).send({ success: false, msg:"File Not Found !"});
			}
		}else{
       return res.status(400).send({ success: false, msg: "Id Not found" });
		}
	}catch(err) {
		logger.error(err.stack || err);
		return res.status(500).send({ success: false,msg: "Internal Server Error" });
	}
});

module.exports = router;

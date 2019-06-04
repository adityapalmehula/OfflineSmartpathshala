var express = require('express');
var router = express.Router();
const fs = require("fs");
var path = require('path');
const configConstants = require('./../constants/config');

//get courses by id 
router.get('/:syllabusName',function(req,res){
	debugger;
	try {
		const getSyllabusName=req.params.syllabusName.toString();

		var filedataInfo = "./../course/syllabus/"+getSyllabusName;
		var filePath = path.join(__dirname, '..', '/course/','/syllabus/'+getSyllabusName);

		const filedata = require(filedataInfo);

		if (fs.existsSync(filePath)) {
				return res.status(200).send({ success: true, data:filedata});
			}else{
				return res.status(400).send({ success: false, msg:"File Not Found !"});
			}
		
	}catch(err) {

		return res.status(400).send({ success: false,msg: "File Not Found !" });
	}
});

module.exports = router;

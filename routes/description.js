var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var path = require('path');
const fsExtra = require('fs-extra');
// Get path of decripted file path
// const courseTen = require('./../course/courses/class10course.json');

// Get path of decripted file path -
var decryptedFilePath = path.join(__dirname, '..', '/public/','/allVideos/');

/* GET users listing. */
router.post('/play',(req,res)=> {
	debugger;
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
	let  videoURL=req.body.videoURL;
	try {
		var position = 3;
		var key='Aditya';
		// get decryptedVideos = "it have corrupted videos"
		var decryptedPath = path.join(__dirname, '..', '/public/','/decryptedVideos/',videoURL);
		var encryptPath = path.join(__dirname, '..', '/public/','/encryptVideos/',videoURL);
		var encryptPathEmpty = path.join(__dirname, '..', '/public/','encryptVideos');
		var options = {encoding:'Base64'};
		fsExtra.emptyDirSync(encryptPathEmpty);
		var decryptedData = fs.readFileSync(decryptedPath, 'Base64');
		let decryptedInfo=decryptedData.toString()
		var encryptInfo = decryptedInfo.replace(key, "");
		fs.writeFileSync(encryptPath, encryptInfo, options);
    return res.status(200).send({success: true,msg: "data successfully encrypt"});
	}catch (err) {
		return res.status(500).send({ success: true,msg: "Video Not Found !"});
	}
});

router.get('/encrypt',function(req,res){
	debugger;
	try {

		readFiles(decryptedFilePath,res);
		
	}catch(err) {
		logger.error(err.stack || err);
		return res.status(500).send({ success: false,msg: "Internal Server Error" });
	}
});

function readFiles(dir,res) {
	var position = 3;
	var key='Aditya';
  // read directory
  fs.readdir(dir, (error, fileNames) => {
    if (error){
    return res.status(500).send({ success: false,msg: "Directory not found " });
    } 

    fileNames.forEach(filename => {
      // get current file name
      const name = path.parse(filename).name;
      // get current file extension
      const ext = path.parse(filename).ext;
      // get current file path
      const filepath = path.resolve(dir, filename);

      var data = fs.readFileSync(filepath, 'Base64');
      let valueString=data.toString()
      var corruptData = [valueString.slice(0, position), key, valueString.slice(position)].join('');

      var options = {encoding:'Base64'};
      var decryptedPath = path.join(__dirname, '..', '/public/','/decryptedVideos/',filename);

   fs.writeFileSync(decryptedPath, corruptData, options);

    });
    return res.status(200).send({success: true,msg: "Data Successfully encrypted"});

  });
}

module.exports = router;

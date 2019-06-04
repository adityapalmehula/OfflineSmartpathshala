var express = require('express');
var router = express.Router();
const data = require('./../course/data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
	res.header("Content-Type",'application/json');
  return res.status(201).send(JSON.stringify(data));
});

module.exports = router;

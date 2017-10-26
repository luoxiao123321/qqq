var express = require('express');
var router = express.Router();
var fs=require('fs')
/* GET home page. */
router.post('/index', function(req, res, next) {
	res.header('Access-Control-Allow-Origin','*');
	var temp=req.body.abc)
	fs.writerFile('lx.txt',temp,function(err){
		
	}
});

module.exports = router;

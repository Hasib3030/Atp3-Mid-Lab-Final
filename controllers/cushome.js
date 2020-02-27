var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('cushome/index');
});

router.get('/product', function(req, res){
	res.render('login/product');
});



module.exports = router;
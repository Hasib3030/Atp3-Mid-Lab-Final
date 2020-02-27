var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/shirt', function(req, res){
	res.render('product/shirt');
});

router.get('/pant', function(req, res){
	res.render('product/pant');
});

router.get('/kidsShirt', function(req, res){
	res.render('product/kidsShirt');
});

router.get('/kidsPant', function(req, res){
	res.render('product/kidsPant');
});

router.get('/tShirt', function(req, res){
	res.render('product/tShirt');
});

module.exports = router;
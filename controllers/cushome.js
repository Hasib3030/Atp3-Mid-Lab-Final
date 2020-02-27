var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/product', function(req, res){
	res.render('login/product');
});

router.get('/', function(req, res){
	userModel.getByUname(req.cookies['username'], function(result){
		res.render('cushome/index', {user: result});
	});
});




module.exports = router;
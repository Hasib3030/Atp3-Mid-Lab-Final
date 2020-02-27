var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.get('/registration', function(req, res){
	res.render('login/registration');
});

router.post('/', function(req, res){

	var user ={
		username: req.body.uname,
		password: req.body.password
	};

	userModel.validate(user, function(result){
	 	if(result!=null && result.type=='admin'){
			res.cookie('username', req.body.uname);
			res.redirect('/home');
			//res.send('admin');
		}
		else{

			res.cookie('username', req.body.uname);
			res.redirect('/cushome');
		}
	});
});

module.exports = router;
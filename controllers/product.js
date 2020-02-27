var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/shirt', function(req, res){
	res.render('product/shirt');
});


module.exports = router;
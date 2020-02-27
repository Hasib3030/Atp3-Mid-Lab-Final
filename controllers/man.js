var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/Man', function(req, res){
	res.render('Man/Man');
});





module.exports = router;
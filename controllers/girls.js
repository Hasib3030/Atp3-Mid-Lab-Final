var express = require('express');
var userModel = require.main.require('./models/user-model');
var router = express.Router();


router.get('/Girls', function(req, res){
	res.render('Girls/girls');
});





module.exports = router;
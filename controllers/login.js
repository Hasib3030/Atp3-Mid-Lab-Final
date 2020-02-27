var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');


router.get('/', function(req, res){
    res.render('login/index');
});

router.get('/account', function(req, res){
    res.render('login/register');
});

router.post('/', function(req, res){
    var user = {
        username : req.body.uname,
        password : req.body.password
    };

    userModel.validate(user, function(status){
        if(status){
            res.redirect('/home');
        }
        else{
            res.send('Invalid Username or Password!!');
        }
    });
});

module.exports = router;
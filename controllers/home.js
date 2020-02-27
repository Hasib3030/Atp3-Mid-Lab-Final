var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/user-model');

router.get('/', function(req, res){
    res.render('home/index');
});

router.get('/view_users', function(req, res){
    userModel.getAll(function(resutls){
        if(resutls.length > 0){
            res.render('home/view_users', {userlist : resutls});
        }
        else{
            res.send('No recored Found !!');
        }
    });
});


module.exports = router;
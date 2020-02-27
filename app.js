//declaration
var express = require('express');
var login = require('./controllers/login');
var home = require('./controllers/home');
var Man = require('./controllers/Man');
var Girls = require('./controllers/Girls');
var cushome = require('./controllers/cushome');
var product = require('./controllers/product');
var logout = require('./controllers/logout');
var ejs = require('ejs');
var exSession = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var expressValidator = require('express-validator');
var app = express();

//configuration
app.set('view engine', 'ejs');

//middleware 
app.use(bodyParser.urlencoded({extended:true}));
app.use(exSession({secret: 'my top secret value', saveUninitialized: true, resave: false}));
app.use(cookieParser());
//app.use(expressValidator());

app.use('/abc', express.static('xyz'));
app.use('/admin', express.static('abc'));

app.use('/login', login);
app.use('/Man', Man);
app.use('/Girls', Girls);
app.use('/home', home);
app.use('/cushome', cushome);
app.use('/product', product);
app.use('/logout', logout);

//routes
app.get('/', function(req, res){
	res.send('Welcome');
});

//server startup
app.listen(3000, function(){
	console.log('node server started at 3000!');
});
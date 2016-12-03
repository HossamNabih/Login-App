var express	= require('express');
var app = express();
var port = process.env.PORT || 1337;
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var mongoose = require('./config/db');
var api = require('./app/api.js')(app);

app.use(express.static(__dirname +'/UI'));

app.get('/',function(req,res){
	var user = {m :'Hello From Express'}
	res.json(user.m);
});
app.listen(port);
console.log('App Started On Port '+port);

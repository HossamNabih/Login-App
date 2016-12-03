var mongoose = require('mongoose');
var url = 'mongodb://localhost/final-login';
module.exports = mongoose.connect(url,function(err){
	if (err) {
		console.log(err);
	}
	console.log('Successfuly Connected to the DB');
});

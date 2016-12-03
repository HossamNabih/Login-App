var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	gmail:{
		type:Boolean,
		default:false
	},
	firstName:{
		type:String
	},
	lastName:{
		type:String
	},
	email:{
		type:String,
		unique:true
	},
	password:{
		type:String
	}

});

module.exports = mongoose.model('users',userSchema);
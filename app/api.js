var User = require('./models/user.js');
module.exports = function(api){

	var sessions = {};
	api.post('/signup',function(req,res){
		var userObject =new User();
		userObject.gmail = req.body.gmail;
		userObject.firstName = req.body.firstName;
		userObject.lastName = req.body.lastName;
		userObject.email = req.body.email;
		userObject.password = req.body.password;
		if (userObject.gmail ==  false ) {
			if (userObject.firstName && userObject.lastName && userObject.email && userObject.password) {
				User.create(userObject, function(err,data){
					if (err) {
						console.log(err);
						res.send({errMessage : "That user already exist"});
					}
					if (!data) {
						res.send({errMessage : "Something wrong happened , try again later"});
					}
					if (data) {
						//Redirect to the Login Page
						res.send({corrMessage : "Successfully Signed up !"});
					}

				});
			}else{
				res.send({errMessage : "Check Missing Data"});
			}
		}

	});


	api.post('/signin',function(req,res){
			var userObject = {}
		userObject.email = req.body.email;
		userObject.password	 = req.body.password;
		if (userObject.email && userObject.password ) {
			User.findOne(userObject,function(err,foundUser){
				if (err) {
					throw err;
				}
				if (foundUser) {
					sessions.user = foundUser;
					res.send(foundUser);
					//console.log(foundUser);
					//console.log('session'+ sessions.user);

				}
				if (!foundUser) {
					res.send({errMessage:"Error in Email or Password"});
				}
			});
		}else{
			res.send({errMessage:"check your fields"});
		}
	});


	api.post('/signin-gmail',function(req,res){
		var userObject = new User();
		userObject.gmail = req.body.gmail;
		userObject.firstName = req.body.firstName;
		userObject.lastName = req.body.lastName;
		userObject.email = req.body.email;
		User.create(userObject, function(err,data){
			if (err) {
					res.send({errMessage:"You already signed in"});
					}	
				sessions.user = userObject;
				console.log("gmail "+sessions.user);
				console.log("userObject "+userObject);
				res.send(userObject);
				
			});
	});


	api.get('/home',function(req,res){
		if (!sessions.user) {
			res.send({errMessage:"Login First"});
		}
		else{
			res.send(sessions.user);
		}
		
		
	})
	
}

mainApp.controller('LoginController' , function($scope,$http,$location){
	//Get user info to access Home Page
	$scope.getUser = function(){
		
		$http.get('http://localhost:1337/home').then(function(response){
			console.log('Response '+ response.data.gmail);
			if ( response.data.gmail == false) {
				console.log(response.data.firstName);
				$scope.firstName = response.data.firstName;
			}
			if ( response.data.gmail == true) {
				console.log(response.data.firstName);
				$scope.firstName = response.data.firstName;
			}
			if(response.data.errMessage){
				window.location.href="#/signin"
			}
		},function(response){
			console.log('some errors');
		});
	}


	//Sign up new User
	$scope.addUser = function(){
			$scope.gmail = false;
			$scope.firstName;
			$scope.lastName;
			$scope.email;
			$scope.password;
			$scope.cpassword;
			$scope.errorMessage;
			if ( $scope.firstName && $scope.lastName && $scope.email && $scope.password && $scope.cpassword && ($scope.password === $scope.cpassword )) {
				var user = {gmail:$scope.gmail,firstName:$scope.firstName,lastName:$scope.lastName,email:$scope.email,password:$scope.password};
				$http.post('http://localhost:1337/signup',user).then(function(response)
				{
					if (response.data.corrMessage) {
						window.location.href='#/signin';	
					}
					if (response.data.errMessage) {
						$scope.errorMessage = response.data.errMessage;
					}
				},function(response){
						$scope.errorMessage = "Oops something wrong happened , just try again after refresh the page";
					});
				
			}
			else{
				$scope.errorMessage = response.data.errMessage;
			}
	}
	
	//Sign in a user
	$scope.checkLogin = function(){
		$scope.email;
		$scope.password ;
		$scope.errorMessage;
		if ($scope.email && $scope.password) {
			var user = {email:$scope.email,password:$scope.password};
			$http.post('http://localhost:1337/signin',user).then(function(response)
			{
				if (!response.data.errMessage) {
					window.location.href='#/home';	
				}
				if (response.data.errMessage && !response.data.foundUser) {
					$scope.errorMessage = response.data.errMessage;
				}
			},function(response){
					$scope.errorMessage = "Oops something wrong happened , just try again after refresh the page";
				});
			}
		else{
			$scope.errorMessage ="Complete the Form to Sign in Please";
			//console.log("Complete the Form to Sign in Please");
		}
	}
});

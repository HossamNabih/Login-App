mainApp.controller('HomeController',function($scope,$http){
	$scope.getUser = function(){
		$http.get('http://localhost:1337/home').success(function(response){
			$scope.user = response.user.firstName;
		});
	}
});

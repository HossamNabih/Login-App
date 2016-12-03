mainApp.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'../views/index.html'
    }).when('/signin',{
        templateUrl:'../views/sign-in.html'
    }).when('/signup',{
        templateUrl:'../views/sign-up.html'
    }).when('/home',{
        templateUrl:'../views/home.html',
        controller:'LoginController'
    }).otherwise({
        redirectTo:'/'
    });

});

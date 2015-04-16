(function (){
	var app = angular.module('app', ['ngRoute', 'ngAnimate']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				// controller  : 'navController',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/about', {
				templateUrl : 'pages/about.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/contact', {
				templateUrl : 'pages/contact.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/menu', {
				templateUrl : 'pages/menu.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/sample', {
				templateUrl : 'pages/sample.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		})

			.when('/blank', {
				templateUrl : 'pages/blank.html',
				resolve: {
					app: function () {
					window.scrollTo(0,0);
				}
			}
		});
	});

	app.controller('navController', function($scope) {
		$scope.message = 'this is some stuff loaded in with angular';
	});

	app.controller('dataController',  function($http, $scope) {
		$http.get('./js/data.json').success(function(data){
			$scope.butts = data;
		});
	});

})();

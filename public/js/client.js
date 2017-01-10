angular.module('weatherApp', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		console.log('Yippee client.js')
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

		$routeProvider

		// Main Routes
		.when('/', {
			templateUrl: '/templates/welcome.html',
			controller: 'UserController as userController'
		})
		.when('/login', {
			templateUrl: '/templates/login.html',
			controller: 'UserController as userController'
		})
		.when('/display', {
			templateUrl: '/templates/display.html',
			controller: 'UserController as userController'
		})
		.when('/admin', {
			templateUrl: '/templates/admin.html',
			controller: 'UserController as userController'
		});

	});

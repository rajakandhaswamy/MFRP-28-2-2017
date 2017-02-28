var app=angular.module("formValidation",['ngRoute','page1controller']);

app.constant('Routes', {
			route1: '/page2',
});
app.controller('appcontroller', function($scope, Routes, $http){
			$scope.pageContent = '';
			$scope.routes = Routes;
});

app.config(function($routeProvider, Routes){

			$routeProvider
				.when(Routes.route1, {
					templateUrl: 'partials/page2partial.html',
                    css: 'css/page2partial.css',
                    controller:'pagecontroller'
				})
		.otherwise({
			templateUrl: 'partials/page1partial.html',
			controller:'pagecontroller',
			css: 'css/page2partial.css'
		});
});



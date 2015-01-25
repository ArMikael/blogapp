(function () {
	'use strict';

	var app = angular.module('Blog');

	app.controller('SinglePostCtrl', ['$scope', '$routeParams', 'postsData',
		function ($scope, $routeParams, postsData){
			console.log($routeParams);
			console.log(postsData);


			// $scope.post = dataService.get($routeParams.title);
	}]);

}());

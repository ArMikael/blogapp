(function () {
	'use strict';

	var app = angular.module('Blog');

	app.controller('SinglePostCtrl', ['$scope', '$routeParams', 'postsData',
		'dataService', 'navStates'
		function ($scope, $routeParams, postsData, dataService, navStates){
			console.log('SinglePostsCtrl');
			console.log($routeParams);

			$scope.utils = utils; // Don't forget to put utils in dependencies on load
			$scope.post = dataService.get($routeParams.title);
	}]);

}());

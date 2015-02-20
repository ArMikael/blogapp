(function(){
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('AdminCtrl', function($scope, $routeParams, $filter, dataService) {

		dataService.get()
			.success(function (data, status) {
				$scope.postsData = data.posts;
				console.log('$scope.postsData', $scope.postsData);
			})
			.error(function (data, status){
				console.log(status, data);
			});
	});
}());

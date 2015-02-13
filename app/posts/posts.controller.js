(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('PostsCtrl', ['$scope', '$http', '$routeParams', '$location',
		'$filter', 'dataService',
		function ($scope, $http, $routeParams, $location, $filter, dataService) {

			// blogapp/index.html#/posts/2?author=alex&tag=Grunt

			console.log($routeParams.page); // "2"
			console.log($location.url()); // "/posts/2?author=alex&tag=Grunt"
			console.log($location.path()); // "/posts/2"
			console.log($location.search()); // Object { author: "alex", tag: "Grunt" }

			dataService.get()
				.success(function (data, status) {
					$scope.postsData = data.posts;
					// $scope.posts = data.data.posts;
					console.log('$scope.postsData', $scope.postsData);
					console.log('$scope.posts', $scope.posts);
				})
				.error(function (data, status){
					console.log(status, data);
				});

			$scope.firstPost = 0;

			$scope.olderPosts = function() {
				if ($scope.postsData.length > ($scope.firstPost + 3)){
					$scope.firstPost += 3;
					$scope.hideButton = false;
				} else {
					return $scope.hideButton = true;
				}
			};

			$scope.newerPosts = function(){
				if (0 < $scope.firstPost) {
					$scope.firstPost -= 3;
					$scope.hideButton = false;
				}
			};

	}]);

}());

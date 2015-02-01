(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('PostsCtrl', ['$scope', '$http', '$routeParams' , '$location',
		'$filter', 'postsData',
		function ($scope, $http, $routeParams, $location, $filter, postsData){

			// blogapp/index.html#/posts/2?author=alex&tag=Grunt

			console.log($routeParams.page); // "2"
			console.log($location.url()); // "/posts/2?author=alex&tag=Grunt"
			console.log($location.path()); // "/posts/2"
			console.log($location.search()); // Object { author: "alex", tag: "Grunt" }

			postsData
				.success(function (data, status) {
					$scope.postsData = data.posts;
				})
				.error(function (data, status){
					console.log(status, data);
				});


			// $scope.cleanLink = function (link) {
			// 	console.log(link);

			// 	// Replacing spaces and punctuations with dashes in the links
			// 	return link.replace(/(\s|\W)/g, '-');
			// };


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

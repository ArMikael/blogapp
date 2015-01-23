(function () {
	'use strict';

	var app = angular.module('Blog');

	app.controller('PostsCtrl', ['$scope', '$http', '$routeParams' , '$location',
	 '$filter', 'postsData',
	  function ($scope, $http, $routeParams, $location, $filter, postsData){

			// blogapp/index.html#/posts/2?author=alex&tag=Grunt

			console.log($routeParams.page); // "2"
			console.log($location.url()); // "/posts/2?author=alex&tag=Grunt"
			console.log($location.path()); // "/posts/2"
			console.log($location.search()); // Object { author: "alex", tag: "Grunt" }

			postsData
				.success(function (data, status){
					$scope.postsData = data.posts;
					$scope.source = data.posts[4]; // To put URL from JSON
				})
				.error(function (data, status){
					console.log(status, data);
				});


	}]);

	console.log('posts.controller');

}());

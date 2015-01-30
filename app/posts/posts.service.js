(function () {
	'use strict';

	var app = angular.module('Blog');

	app.factory('postsData', [ '$http', function ($http) {
		// var postsData = null;

		// Ajax request to the posts.json
		// $http.get('data/posts.json')
		// 	.success(function (data, status){
		// 		console.log('data', data);
		// 		$scope.postsData = data.posts;
		// 	})
		// 	.error(function (err, status){
		// 		console.error(status, err);
		// 	});

		// return postsData;

		return $http.get('data/posts.json');

	}]);

	console.log('posts.service');

}());

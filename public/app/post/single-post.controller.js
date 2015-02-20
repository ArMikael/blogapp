(function () {
	'use strict';

	var app = angular.module('BlogApp');
	// , ['ngSanitize']

	app.controller('SinglePostCtrl', ['$scope', '$routeParams', 'dataService',
		function ($scope, $routeParams, dataService) {
			console.log('$routeParams from SinglePostCtrl', $routeParams);
			console.log('dataService', dataService);
			console.log('$routeParams.title', $routeParams.title);

			//Get the data from posts.json
			$scope.postTitle = $routeParams.title;

			$scope.post = dataService.get($scope.postTitle).then(function (data) {
				$scope.post = data;
				console.log('$scope.post', $scope.post);
			});

			// $scope.utils = utils;

			// $scope.post = dataService.get()
			// 	.success(function (post) {
			// 		$http.get(post.htmlPath)
			// 		    .success(function (data) {
			// 		        $scope.postHtml = $sanitize(data);
			// 		    });
			// 	});


	}]);

}());

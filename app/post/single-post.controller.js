(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('SinglePostCtrl', ['$scope', '$routeParams', 'postsData',
		function ($scope, $routeParams, postsData) {
			console.log('$routeParams from SinglePostCtrl', $routeParams);
			console.log(postsData);

			postsData.success(function (data, status) {

				// initialize the scope with the JSON data object
				$scope.postsData = data.posts;

				for (var post in $scope.postsData) {

					if ($scope.postsData.hasOwnProperty(post)) {

						var postTitle = $scope.postsData[post].title;
						console.log('postTitle before cleaning', postTitle);
						console.log(replaceSpaces(postTitle));

						if (postTitle === $routeParams.title){

							$scope.post = $scope.postsData[post];
						}
					}
				}

			})
			.error(function (data , status) {
				console.erorr(status, data);
			});


			// $scope.post = dataService.get($routeParams.title);
	}]);

}());

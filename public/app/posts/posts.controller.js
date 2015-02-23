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
			console.log('$location.search', $location.search()); // Object { author: "alex", tag: "Grunt" }


			dataService.get()
				.success(function (data, status) {
					$scope.postsData = data.posts;
					console.log('$scope.postsData', $scope.postsData);

						var filteredPosts;
						filteredPosts = $filter('sidebarFilter')(data.posts);
						$scope.postsData = filteredPosts;
						console.log('Filtered postsData', $scope.postsData);
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

			// var title = 'Grunt - Intro';
		 //        var postObj = {
		 //            description: '*** TESTING ***'
		 //        };

			// dataService.save(title, postObj)
	  //           .then(function (post) {
	  //               console.log(post);
	  //           });

	}]);

}());

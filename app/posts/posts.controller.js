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
				.success(function (data, status) {
					var authorsArr = [];
					var tagsArr = [];
					var datesArr = [];

					$scope.postsData = data.posts;

					// $scope.authors = data.posts.authors;
					$.each(data.posts, function (index, post) {

						authorsArr.push(post.author);

						datesArr.push(post.date)

						$.each(post.tags, function (index, tag) {
							tagsArr.push(tag);
						});

					});

					$scope.authors = authorsArr;
					$scope.dates = datesArr;
					$scope.tags = tagsArr;

					console.log(authorsArr);
					console.log(tagsArr);
					console.log(datesArr);

				})
				.error(function (data, status){
					console.log(status, data);
				});

			// var countAuthors = function (authorsArr) {
			// 	$.each(authorsArr, function (index, author) {
			// 		console.log('Heelloo!');
			// 	});

			// 	return author + " : " + key;
			// };

			// countAuthors(authorsArr);



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

			// $scope.countTags = function () {
			// 	var tags = {
			// 		javascript: 6
			// 	};

			// 	var tags = [{
			// 		name: 'javascript',
			// 		count: 6
			// 	}];
			// };

			// <div class="list-group">
			// 	<a href="#" class="list-group-item"
			// 	ng-repeat=" tag in tags | orderBy: 'tags'">
			// 		<span class="badge">{{count}}</span>
			// 		{{name}}
			// 	</a>
			// </div>

	}]);

}());

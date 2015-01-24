(function () {
	'use strict';

	var app = angular.module('Blog', ['ngRoute']);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo : '/posts'
			})
			.when('/posts', {
				templateUrl : 'app/posts/posts.view.html',
				controller : 'PostsCtrl'
			})
			.when('/posts/:page?', {
				templateUrl : 'app/posts/post.view.html',
				controller : 'PostsCtrl'
			})
			.when('/admin', {
				templateUrl : 'app/admin/admin.view.html',
				controller : 'AdminCtrl'
			})
			.when('/post/:title?', {
				templateUrl : 'app/posts/tags.view.html',
				controller : 'SinglePostsCtrl'
			})
			// .when('/:author', {
			// 	templateUrl : 'app/posts/authors.view.html',
			// 	controller : 'PostsCtrl'
			// })
			// .when('/:tag', {
			// 	templateUrl : 'app/posts/tags.view.html',
			// 	controller : 'PostsCtrl'
			// })
			.otherwise({
				redirectTo : '/'
			})
	}]);
}());

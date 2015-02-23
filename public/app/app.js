(function () {
	'use strict';

	var app = angular.module('BlogApp', ['ngRoute', 'ngSanitize']);

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo : '/posts'
			})
			.when('/posts', {
				templateUrl : 'app/posts/posts.view.html',
				controller : 'PostsCtrl'
			})
			.when('/post/:title?', {
				templateUrl: 'app/post/single-post.view.html',
				controller: 'SinglePostCtrl'
			})
			.when('/admin', {
				templateUrl : 'app/admin/admin.view.html',
				controller : 'AdminCtrl',
				resolve: {
					postsData: function (dataService) {
						return dataService.get();
					}
				}
			})
			.when('/admin/edit/post:title?', {
				templateUrl: 'app/admin/edit.view/html',
				controller: 'EditCtrl',
				resolve: {
					postData: function ($route, dataService) {
						var title = $route.current.params.title;
						return dataService.getById(title);
					}
				}
			})
			.when('/admin/new/post', {
				templateUrl: 'app/admin/edit.view.html',
				controller: 'NewCtrl'
			})
			.otherwise({
				redirectTo : '/'
			})
	}]);
}());

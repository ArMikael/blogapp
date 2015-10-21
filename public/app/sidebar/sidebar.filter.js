(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.filter('sidebarFilter', function ($filter, $location, $routeParams, utils) {
		return function (data) {

			var query = $location.search();
			console.log('query.search', query.search);
			console.log('query', query);

			// Filter posts by text from Search Bar
			if (query.search) {
				return $filter('filter')(data, query.search);
			}

			console.log('query.category', query.category);

			// Filter posts by category tag
			if (query.category) {
				return $filter('filter')(data, {
					tags: query.category
				});
			}

			// Filter posts by author tag
			if (query.author) {
				return data.filter(function (post) {

					if (query.author === $filter('replaceSpaces')(post.author)) {
						return post;
					}

					// if (query.author === utils.cleanUrl(post.author)) {
					// 	return post;
					// }
				});
			}

		return data;

		}

	});

}());

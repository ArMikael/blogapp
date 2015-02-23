(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.filter('sidebarFilter', function ($filter, $location, $routeParams, utils) {
		return function (data) {

			var query = $location.search();
			console.log('query.search', query.search);
			console.log('query', query);

			// Search by Text from SearchBar
			if (query.search) {
				return $filter('filter')(data, query.search);
			}

		return data;
		}

	});

}());

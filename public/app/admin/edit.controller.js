(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('EditCtrl', ['$scope', '$http', '$routeParams', 'dataService',
		function ($scope, $http, $routeParams, dataService) {

			marked.setOptions({
				// GitHub Flavored Markdown
				gfm: true,
				// GFM tables
				tables: true,
				// GFM line breaks
				breaks: true,
				// Better lists handling
				smartLists: true,
				// Better punctuation handling
				smartypants: true,
				// Code blocks language prefix (reset default)
				langPrefix: '',
				// Prefix for headings ID's
				headerPrefix: 'hid-',
				highlight: false
			});

			$scope.postHtml = marked('# Hello, World!');
	}]);
}());






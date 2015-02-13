(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.factory('utils', function() {

		var cleanUrl = function(link) {
			var dashedLink = link.replace(/(\s|\W)/g, '-').toLowerCase();
			return dashedLink.replace(/\-{2,3}/g, '-');
		};

		// Public API
		return {
			cleanUrl: cleanUrl
		};
	});

}());

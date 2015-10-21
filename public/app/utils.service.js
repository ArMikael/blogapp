(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.factory('utils', function() {

		var cleanUrl = function(link) {
			console.log('link', link);
			var dashedLink = link.replace(/(\s|\W)/g, '-').toLowerCase();
			console.log('dashed', dashedLink);
			return dashedLink.replace(/\-{2,3}/g, '-');
		};

		// Public API
		return {
			cleanUrl: cleanUrl
		};
	});

}());

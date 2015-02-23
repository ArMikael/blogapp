(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.filter('replaceSpaces', function() {
		return function(link){
			var dashedLink = link.replace(/(\s|\W)/g, '-').toLowerCase();
			return dashedLink.replace(/\-{2,3}/g, '-');
		}
	});

	app.filter('limitFromTo', function() {
	    return function (input, index) {
	    	console.log('input filters.js', input);
	    	// Slicing 3 posts from provided start point (index)
       		return input.slice(index, index + 3);
	    };
	});

}());

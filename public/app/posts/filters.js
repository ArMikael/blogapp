(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.filter('replaceSpaces', function() {
		return function(link) {
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

	app.filter('removeDashes', function() {
		return function (name) {
			var cleanName = name.replace(/('-'')/g, ' ');
			console.log('cleanName', cleanName);
			return cleanName.replace(/(^\w)|( \w)/g, '\U');
		}
	});

	// function replacer(str, p1, p2) {
	// 	return str + " - " + p1 + " , " + p2;
	// }

	// var newString = "XXzzzz".replace(/(X*)(z*)/, replacer)


	// app.filter('makeReadable', function() {
	// 	return function (name) {
	// 		return name.replace();
	// 	}
	// });

}());

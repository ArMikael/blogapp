(function () {
	'use strict';

	var app = angular.module('Blog');

	var tag = 0;

	// Creating Custom filter to Angular
	app.filter('searchTag', [function() {

		return function (arr, searchText) {
			console.log(arr);
			console.log(searchText);

			for (var i = 0; i < arr.length; i++) {
				if (arr[i] === searchText) {
					tag = tag++;
				}
			}

			return tag;

			console.log('tag', tag);
			console.log(arr);

			// return arr.filter(function (item) {
			// 	// return item.indexOf(searchText);
			// 	console.log(item);
			// })
		}
	}]);

	app.filter('replaceSpaces', function() {
		return function(link){
			var dashedLink = link.replace(/(\s|\W)/g, '-').toLowerCase();
			return dashedLink.replace(/\-{2,}/g, '-');
		}
	});

}());

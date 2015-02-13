(function () {
	'use strict';

	var app = angular.module('BlogApp');

	// app.factory('postsData', [ '$http', function ($http) {

	// 	return $http.get('data/posts.json');

	// }]);

	app.factory('dataService', function ($http, $q, $filter, utils) {

		// Get data using http and store in variable
		var promise = $http.get('data/posts.json')
			.error(function (data, status) {
				console.error(status, data);
			});

		return {
			 get: function (id) {
			 	if (id) {
			 		return this.getById(id);
			 	}
				return promise;
			 },

			 getById: function (id) {
			 	var defer = $q.defer();

			 	// Checking if the data is ready
			 	promise.then(function(data) {
			 		var cleanId;
			 		cleanId = utils.cleanUrl(id);
			 		console.log('cleadnId', cleanId);

			 		// Filter the data and get only requested post
			 		$.each(data.data.posts, function(inx, post) {
			 			// console.log(inx, post, post.title);
			 			// var cleanLink = utils.cleanUrl(post.title);
			 			// console.log('cleanLink', cleanLink);
			 			if(utils.cleanUrl(post.title) === cleanId) {
			 				defer.resolve(post);
			 				return false;
			 			}
			 		});
			 	});

			 	return defer.promise;
			 }
		};

	});

	app.filter('replaceSpaces', function() {
		return function(link) {
			var dashedLink = link.replace(/(\s|\W)/g, '-').toLowerCase();
			return dashedLink.replace(/\-{2,3}/g, '-');
		}
	});

	app.filter('limitFromTo', function() {
	    return function (input, index) {
	    	// Slicing 3 posts from provided start point (index)
       		return input.slice(index, index + 3);
	    };
	});

}());

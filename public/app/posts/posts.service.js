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

}());

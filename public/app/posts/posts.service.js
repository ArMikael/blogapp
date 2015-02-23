(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.factory('dataService', function ($http, $q, $filter, utils) {

		// Get data using http and store in variable
		var dataCache = {},
			defer = $q.defer();
			// postsPromise = defer.promise;

		var promise = $http.get('/posts')
			.success(function (data, status) {
				console.log('data from posts.service.js', data);
				dataCache.posts = data.posts;
				defer.resolve(dataCache);
			})
			.error(function (data, status) {
				console.error(status, data);
			});

		return {
			save: function (title, postObj) {
				var defer = $q.defer();

				$http.post('/posts', {
					title: title,
					data: postObj
				})
					.success(function (data, status) {
						defer.resolve(data);
					});

				return defer.promise;
			},

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

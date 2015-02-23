(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.filter('sidebarFilter', function ($filter, $location, $routeParams, utils) {
		return function (data) {

			var query = $location.search();
			console.log('query.search', query.search);
			console.log('query', query);

			// Filter posts by text from Search Bar
			if (query.search) {
				return $filter('filter')(data, query.search);
			}

			console.log('query.category', query.category);

			// Filter posts by category tag
			if (query.category) {
				return $filter('filter')(data, {
					tags: query.category
				});
			}

			// Filter posts by author tag
			if (query.author) {
				console.log('<<Author>>', query.author);



				data.filter(function (post) {

					var cleanAuthor = utils.cleanUrl(post.author);
					console.log('cleanAuthor', cleanAuthor);

					if (query.author === $filter('replaceSpaces')(post.author)) {
						// console.log('AUTHORS', query.author, $filter('replaceSpaces')(post.author));
						return post;
					}

					// if (query.author === utils.cleanUrl(post.author)) {
					// 	console.log('!!!!!!');
					// 	return post;
					// }
				});

				// var authorName = removeDashes(query.author);

				// return $filter('filter')(data, {
				// 	author: authorName
				// });

				// var cleanName = query.author.replace(/(-)/g, ' ');
				// console.log('cleanName', cleanName);

				// var readableName = cleanName.replace(/(^\w)|(\s\w)/g, $1 $2);
				// console.log('readableName', readableName);

				// return $filter('filter')(data, {
				// 	author: readableName
				// });

				// data.forEach(function (post) {
				// 	var author = replaceSpaces(post.author);

				// 	if (author === query.author) {
				// 		return $filter('filter')(data, {
				// 			author: query.author
				// 		})
				// 	}
				// });


			}

		return data;

		}

	});

}());

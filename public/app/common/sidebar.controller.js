(function (){
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('SideBarCtrl', ['$scope', '$routeParams', '$location', '$filter', 'dataService',
		function ($scope, $routeParams, $location, $filter, dataService) {

			// Adding Active class to current filter

			this.setFilter = function (activeFilter) {
				this.filter = activeFilter;
				console.log('set filter', activeFilter);
			};

			this.checkFilter = function (ckeckedFilter) {
				return this.filter === ckeckedFilter;
			};


			// Ajax Request for all sidebar tags from JSON
			dataService.get()
				.success(function (data, status) {
					$scope.postsData = data.posts;

				var authorsArr = [],
					tagsArr = [],
					datesArr = [],
					yearsArr = [];

				var addToArray = function (thisArr, data) {
					var newObj;

					if (thisArr.length !== 0) {
						var index = thisArr.map(function (obj) {
							return obj.name;
						}).indexOf(data);

						if (index > -1) {
							thisArr[index].count++;
						} else {
							newObj = {'name' : data, 'count' : 1 };
							thisArr.push(newObj);
						}
					} else {
						newObj = {'name' : data, 'count' : 1 };
						thisArr.push(newObj);
					}
				};


				// var addToDates = function (thisArr, data) {
				// 	var newDate;

				// 	var month = $filter('date')(data, 'MMMM');
				// 	var year = $filter('date')(data, 'yyyy');

				// 	if (thisArr.length !== 0) {
				// 		var index = thisArr.map(function (obj) {
				// 			return obj.month;
				// 		}).indexOf(month);

				// 		if (index > -1) {
				// 			thisArr[index].count++;
				// 		} else {
				// 			newDate = {'month' : month, 'year' : year, 'count' : 1 };
				// 			thisArr.push(newDate);
				// 		}
				// 	} else {
				// 		newDate = {'month' : month, 'year' : year, 'count' : 1 };
				// 		thisArr.push(newDate);
				// 	}
				// };

				$scope.postsData = data.posts;

				$.each(data.posts, function (index, post) {
					// Filter raw "date" data to human readable Year
					var year = $filter('date')(post.date, 'yyyy');
					addToArray(yearsArr, year);

					addToArray(datesArr, post.date);

					// $.each(post.date, function (index, date) {
					// 	var month = $filter('date')(post.date, 'MMMM');
					// 	var year = $filter('date')(post.date, 'yyyy')
					// 	});

					// addToDates(datesArr, post.date);

					// Checking if author already exist in array and adding count to it.
					addToArray(authorsArr, post.author);

					$.each(post.tags, function (index, tag) {
						// Checking if tag already exist in array and adding count to it.
						addToArray(tagsArr, tag);
					});
				});




				$scope.authors = authorsArr;
				$scope.dates = datesArr;
				$scope.tags = tagsArr;
				$scope.years = yearsArr;

				console.log(authorsArr);
				console.log(tagsArr);
				console.log(datesArr);
				console.log(yearsArr);

			})
			.error(function(data , status){
				console.erorr(status, data);
			});

			// Search bar functionality
			$scope.search = function (query) {
				$location.search('');
				$location.search('search', query);
			};

			var queryParams = $location.search();
			console.log('queryParams', queryParams);

			if (queryParams.search) {
				return $filter('filter')(postsData, queryParams.search);
			}

	}]);
}());

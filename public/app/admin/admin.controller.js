(function(){
	'use strict';

	var app = angular.module('BlogApp');

	app.controller('AdminCtrl', function($scope, $routeParams, $filter, $location, dataService) {

		dataService.get()
			.success(function (data, status) {
				$scope.postsData = data.posts;
				console.log('$scope.postsData', $scope.postsData);

				var filter = $location.search();
				console.log('filter', urlParam);

				if (filter !== -1) {
					console.log('filter', filter);

					$scope.postsData = $filter('filter')(data.posts);
				}

				// Filtering by tags



			})
			.error(function (data, status){
				console.log(status, data);
			});


		// Adding filter by any column with reverse option
		$scope.sortField = 'date';
		$scope.reverse = false;

		console.log($scope.sortField);

		$scope.sort = function(fieldName) {
			if ($scope.sortField === fieldName) {
				$scope.reverse = !$scope.reverse;
			} else {
				$scope.sortField = fieldName;
				$scope.reverse = false;
			}
		}

		$scope.isSortUp = function(fieldName){
			return $scope.sortField === fieldName && !$scope.reverse;
		}

		$scope.isSortDown = function(fieldName){
			return $scope.sortField === fieldName && $scope.reverse;
		}

	});
}());

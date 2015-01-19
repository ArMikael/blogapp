(function () {
	'use strict';

	var app = angular.module('Posts');

	app.controller('MainCtrl', ['$scope', '$http',
		function($scope, $http){

		// Ajax request in AngularJS
		$http.get('data/posts.json').success(function(data){
			$scope.data = data;
		}).error(function(data, status){
			console.log('Error ' + status);
		});
}());

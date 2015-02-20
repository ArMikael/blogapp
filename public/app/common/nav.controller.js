(function () {
	'use strict';

	var app = angular.module('BlogApp');

	app.controller("NavCtrl", function () {
		this.tab = 1;

		this.selectTab = function (activeTab) {
			this.tab = activeTab;
		};

		this.checkTab = function (ckeckedTab) {
			return this.tab === ckeckedTab;
		};

	});

}());

angular
	.module('ToDo')
	.controller('todoEditController',['$scope','dataHouse', function ($scope, dataHouse){
		$scope.tasklist = dataHouse.task();
	}]);
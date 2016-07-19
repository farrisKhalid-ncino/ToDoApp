var ToDo = angular.module('ToDo',[]);

ToDo.controller('todoController',['$scope', function ($scope){
	$scope.todos = [
		{'title':'get beer', 'done':false},
		{'title':'get milk', 'done':false},
		{'title':'get eggs', 'done':false},
		{'title':'forever 21?', 'done':false},

	];

	$scope.addTask = function (){
		$scope.todos.push({'title':$scope.newTask, 'done':false});
		$scope.newTask = '';
	};
	$scope.clearCompleted = function (){
		$scope.todos = $scope.todos.filter(function(task){
			return !task.done;
		});
	};

	$scope.showCompleted = function (){
		$scope.todos = $scope.todos.filter(function(item){
			return item.done;
		});
	};

}]);


//Phase1
//pages: 1. active, completed, clear completed/clear completed history

//Phase2
//link user profile logins to tasks created


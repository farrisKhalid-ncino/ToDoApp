angular
	.module('ToDo')
	.controller('todoController',['$scope','dbTask', function ($scope, dbTask){

			// All data added, updated, retrieved into salesforce org is handled with javascript remote objects
			var t = new dbTask();

			//holds current task display on view
			$scope.tasks =  [];
			$scope.completedTasks = [];

			$scope.toggleEdit = false;

			$scope.toggleComplete = function (id) {
				// console.log(id+' : theres the id');
				// console.log(JSON.stringify($scope.tasks));
				for (var i = 0; i < $scope.tasks.length; i++) {
					if ($scope.tasks[i].id === id && $scope.tasks[i].completeBox===false) {
						t.update($scope.tasks[i].id,{"completeBox":true});
					}

				}
			};


			$scope.editTask = function (task, newTask) {
				var i = $scope.tasks.indexOf(task);
				$scope.tasks[i].dbTaskField = newTask;
				t.update($scope.tasks[i].id,{"dbTaskField":newTask});
			};

			//removes single item from array + salesforce
			$scope.singleDelete = function(task){
				var index = $scope.tasks.indexOf(task);
				t.del($scope.tasks[index].id);
      		$scope.tasks.splice(index,1);
			};

			$scope.purgeDelete = function(){
				while ($scope.completedTasks.length) {
					t.del($scope.completedTasks[0].id);
      			$scope.completedTasks.splice(0,1);
				}
			};

			//Adds a new task to controller array as well as salesforce
			$scope.addTask = function() {

				t.create({"dbTaskField":$scope.data,"completeBox":false});
				t.retrieve({where: {dbTaskField: {eq: $scope.data }}},
					function(error, records) {
					if (error) {
						alert(error.message);
					}
					records.forEach(function(record){
						$scope.tasks.push({"id":record.get("Id"),"dbTaskField":record.get("dbTaskField"),"completeBox":record.get("completeBox")});
					});
					$scope.$apply();
				});

				$scope.data = '';
			};


			// LOADS TASKS FROM SALESFORCE
			$scope.loadTasks = function (){
				t.retrieve({},
					function(error, records){

							if(error){
								alert(error.message);
							}

							records.forEach(function(record){
								if (record.get("completeBox") === true) {
									$scope.completedTasks.push({"id":record.get("Id"),"dbTaskField":record.get("dbTaskField"),"completeBox":record.get("completeBox")});
								}
								else {
									$scope.tasks.push({"id":record.get("Id"),"dbTaskField":record.get("dbTaskField"),"completeBox":record.get("completeBox")});
								}

							});
							$scope.$apply();
				});
			};

			$scope.loadTasks();


	}]);

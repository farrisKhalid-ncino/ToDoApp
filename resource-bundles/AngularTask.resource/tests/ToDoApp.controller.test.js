
describe('ToDo Angular Application',function(){
	// load angular module/ng-app
		// declare global variables
	var $scope;
	var $controller;
	var dbTask;

	beforeEach(module('ToDo'), function($provide){});

	beforeEach(inject(function($rootScope, _$controller_, _dbTask_){
		$controller = _$controller_;
		$scope = $rootScope.$new();
		dbTask = _dbTask_;

		var todoController = $controller('todoController',{$scope: $scope, dbTask: dbTask});
	}));

	//test directive onEnter

	describe('service: dbTask', function(){
		it('Apex:javascript remote object (TASKS from salesforce) declared on visualforce page is now a service', function(){
		expect(dbTask).toBeDefined();
		});
	});

	describe('todoController',function(){


		it('$scope.tasks and $scope.completedTasks are empty arrays on initialization', function(){
			expect($scope.tasks).toEqual([]);
			expect($scope.completedTasks).toEqual([]);
		});

		it('toggleEdit default value: false', function(){
			expect($scope.toggleEdit).toEqual(false);
		});

		it('$scope.t is DbTask service', function(){
			expect($scope.t).toBeDefined();
		});




	});






});

angular

	.module('ToDo',['ngRoute'])

	.constant('resourceUrl','/resource/'+Date.now()+'/Appf')

	.config(['$routeProvider','resourceUrl', function($routeProvider, resourceUrl) {
		$routeProvider
			.when('/', {
				templateUrl: resourceUrl+'/todo/todo-list.html',
				controller: 'todoController'
			})
			.when('/new', {
				templateUrl: resourceUrl+'/todo/todo-new.html',
				controller: 'todoNewController'
			})
			.when('/edit', {
				templateUrl: resourceUrl+'/todo/todo-edit.html',
				controller: 'todoEditController'
			})
			.otherwise({
				redirectTo:'/'
			});
	}])

	//makes proxy object available to rest of ToDo
	.service('dbTask', function(){
		return SObjectModel.dbTask;
	})




angular

	.module('ToDo',['ui.router'])

	.constant('resourceUrl','/resource/'+Date.now()+'/AngularTask')

	.config(['$stateProvider','$urlRouterProvider','resourceUrl', function($stateProvider, $urlRouterProvider, resourceUrl) {
		$urlRouterProvider.otherwise('/home/current');

		$stateProvider
			.state('nav',{
				url: '/home',
				templateUrl: resourceUrl+'/tasklist/nav.html',
				controller: 'todoController'
			})

			.state('nav.current', {
				url: '/current',
				templateUrl: resourceUrl+'/tasklist/todo-list.html',

			})
			.state('nav.completed', {
				url:'/completed',
				templateUrl: resourceUrl+'/tasklist/todo-edit.html',
			});
	}])

	//makes proxy object available to rest of ToDo
	.service('dbTask', function() {
		return SObjectModel.dbTask;
	});

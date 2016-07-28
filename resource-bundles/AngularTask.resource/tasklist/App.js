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
				templateUrl: resourceUrl+'/tasklist/todo-completed.html',
			});
	}])

	//makes proxy object available to rest of ToDo
	.service('dbTask', function() {
		return SObjectModel.dbTask;
	})

	//On enter directive; mostly used for adding tasks on enter
	.directive('ngEnter', function () {
	return function (scope, element, attrs) {
		  element.bind("keydown keypress", function (event) {
		      if(event.which === 13) {
		          scope.$apply(function (){
		              scope.$eval(attrs.ngEnter);
		          });

		          event.preventDefault();
		      }
		  });
		};
	})



















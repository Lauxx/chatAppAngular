angular.module('chatApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state("list", {
		url:"/",
		templateUrl: './list.html'
	}).state('one', {
		url: '/one', 
		templateUrl: './one.html'
	});


	$urlRouterProvider
	.otherwise('/');
});
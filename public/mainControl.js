angular.module('chatApp').controller('chatController', function($scope, chatServe){
	$scope.hello = chatServe.welcome;
});
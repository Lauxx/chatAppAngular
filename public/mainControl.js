angular.module('chatApp').controller('chatController', function($scope, chatServe){
	$scope.hello = chatServe.welcome;

	$scope.chat;
	// $scope.postChat = function(){
	// 	chatServe.postChat(chat).then(function(res){
	// 		$scope.chat = res.data;
	// 		console.log(res.data);
	// 	})
	// }
	$scope.getChat = function(){
		chatServe.getChat().then(function(res){
			$scope.chat = res;
			console.log($scope.chat, 'i am control data');
		})
	}
});
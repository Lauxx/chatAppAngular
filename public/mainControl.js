angular.module('chatApp').controller('chatController', function($scope, chatServe){
	$scope.hello = chatServe.welcome;

	setInterval(function(){
      $scope.getChat();
    }, 1000);

	
	$scope.postChat = function(chat){
		var newChat = {
			body: chat
		};

		chatServe.postChat(newChat).then(function(res){
			console.log(res, 'i am control post data');
			$scope.newChat = "";
			$scope.getChat();
		})
	};

	$scope.chat;
	$scope.getChat = function(){
		chatServe.getChat().then(function(res){
			$scope.chat = res;
			console.log($scope.chat, 'i am control data');
		})
	};

	$scope.clearChat = function(){
		chatServe.clearChat().then(function(res){
			console.log("successful delete");
			$scope.getChat();
		})
	};

});
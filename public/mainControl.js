angular.module('chatApp').controller('chatController', function($scope, chatServe){
	$scope.hello = chatServe.welcome;
	
	$scope.postChat = function(chat){
		$scope.today = new Date;
		var newChat = {
			body: chat,
			date: $scope.today.toDateString()
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
			console.log($scope.chat, 'i am control get data');
		})
	};

	$scope.getChat();

	$scope.clearChat = function(){
		chatServe.clearChat().then(function(res){
			console.log("successful delete");
			$scope.getChat();
		})
	};

	$scope.putChat;
	$scope.editChat = function(chats){
		chatServe.editChat(chats).then(function(res){
			$scope.putChat = res;
			console.log($scope.putChat, 'i am control put data');
			$scope.getChat();
		})
	};

	$scope.removeChat;
	$scope.deleteChat = function(chats){
		chatServe.deleteChat(chats).then(function(res){
			$scope.removeChat = res;
			console.log($scope.removeChat, 'i am control delete one data');
			$scope.getChat();
		})
	};

	$scope.getOne;
	$scope.getOneChat = function(chats){
		chatServe.getOneChat(chats).then(function(res){
			$scope.getOne = res;//now my key for get one router
			console.log(res, 'i am control get one data');
		})
	};
});
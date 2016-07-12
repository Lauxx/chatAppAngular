angular.module('chatApp').service('chatServe', function($http){

	this.welcome="Hello Lauren";

	this.postChat = function(chat){
		return $http({
			method: 'POST',
			url: '/chat',
			data: chat
		}).then(function(res){
			console.log(res.data, 'i am service post data');
			return res.data;
		})
	};

	this.getChat = function(){
		return $http({
			method: 'GET', 
			url: '/chat'
		}).then(function(res){
			console.log(res.data, 'i am service get data');
			return res.data
		})
	};

	this.clearChat = function(){
		return $http({
			method: 'DELETE',
			url: '/chat'
		}).then(function(res){
			console.log(res.data, 'i am service delete data');
			return res.data
		})
	};

	this.editChat = function(chats){
		return $http({
			method: 'PUT', 
			url: '/chat/' + chats._id,
			data: chats
		}).then(function(res){
			console.log(res.data, 'i am service put data');
			return res.data
		})
	};

});
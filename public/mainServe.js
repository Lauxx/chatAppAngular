angular.module('chatApp').service('chatServe', function($http){

	this.welcome="Hello Lauren";

	// this.postChat = function(){
	// 	return $http({
	// 		method: 'POST',
	// 		url: '/chat'
	// 	}).then(function(res){
	// 		console.log(res.data);
	// 		return res.data;
	// 	})
	// };
	this.getChat = function(){
		return $http({
			method: 'GET', 
			url: '/chat'
		}).then(function(res){
			console.log(res.data, 'i am service data');
			return res.data
		})
	};
	
});
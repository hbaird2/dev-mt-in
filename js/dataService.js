var ourService = angular.module('DevMtn').service('dataService', function($http){

  // this.getData = function() {
  //   return $http({
  //     method: 'GET',
  //     url: 'http://connections.devmountain.com/api/profiles?name=t'
  //   }).then(function(response){
  //     return response;
  //   }, function(error){
  //     alert("error");
  //   })
  // }
  //
  //
  //
  //
  // this.postData = function(user) {
  //   var ourService = this;
  //   console.log(user)
  //   return $http({
  //     method: 'POST',
  //     url: 'http://connections.devmountain.com/api/profiles',
  //     data: user
  //   }).then(function(response){
  //     // console.log("this is test", ourService)
  //     ourService.newVariable = response;
  //     return response;
  //   }, function(error){
  //     alert("error");
  //   })
  // }

});

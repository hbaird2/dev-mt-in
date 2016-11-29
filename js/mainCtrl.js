angular.module('DevMtn').controller('mainCtrl', function($scope, $state, dataService){

  function getData() {
  dataService.getData().then(function(response){
    console.log(111111, response);
    $scope.data = response;
  });
}

getData();


$scope.saveChanges= function(name, tag, image, bio) {
  var obj = {
    name: name,
    tagline: tag,
    profileUrl: image,
    bio: bio
  }
  dataService.postData(obj).then(function(response) {
    $state.go('landing')
  });
}
// $scope.userId = obj['_id'];
//
// console.log(2222, userId);


  // $scope.saveChanges = function(){
  //   window.location = "landing.html";
  //   }
  //
    // $scope.storeName = function(){
    //   sessionStorage.setItem('name', $scope.nameText)
    // }
    //
    // $scope.storeTagline = function(){
    //   sessionStorage.setItem('tagline', $scope.taglineText)
    // }
    //
    // $scope.storeProfileImg = function(){
    //   sessionStorage.setItem('profileImg', $scope.profileImg)
    // }
    //
    // $scope.storeBio = function(){
    //   sessionStorage.setItem('bio', $scope.bioText)
    // }

});

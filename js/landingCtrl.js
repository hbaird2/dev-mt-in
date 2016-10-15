angular.module('DevMtn').controller('landingCtrl', function($scope, dataService){

$scope.getTest = function() {
  console.log('this is dataService.test', test)
}

$scope.getTest();

// $scope.newUser = dataService.postData;
// console.log(newUser);

    // ------using local storage --------
    $scope.userName = sessionStorage.getItem('name');
    $scope.userTagline = sessionStorage.getItem('tagline');
    $scope.profileImg = sessionStorage.getItem('profileImg');
    $scope.userBio = sessionStorage.getItem('bio');


});

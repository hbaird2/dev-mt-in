angular.module('DevMtn').controller('updateProfileCtrl', function($scope, dataService){


    $scope.storeName = function(){
      sessionStorage.setItem('name', $scope.nameText)
    }

    $scope.storeTagline = function(){
      sessionStorage.setItem('tagline', $scope.taglineText)
    }

    $scope.storeProfileImg = function(){
      sessionStorage.setItem('profileImg', $scope.profileImg)
    }

    $scope.storeBio = function(){
      sessionStorage.setItem('bio', $scope.bioText)
    }

    $scope.userName = sessionStorage.getItem('name');
    $scope.userTagline = sessionStorage.getItem('tagline');
    $scope.profileImg = sessionStorage.getItem('profileImg');
    $scope.userBio = sessionStorage.getItem('bio');

});

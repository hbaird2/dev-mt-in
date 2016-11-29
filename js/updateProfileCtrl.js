angular.module('DevMtn').controller('updateProfileCtrl', function($scope, $state, dataService){


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

  // $scope.newUser = dataService.newVariable.data;

// ---------using local storage-----------
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

angular.module('DevMtn', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('initialView',{
        url:'/',
        templateUrl: 'views/initialView.html',
        controller: 'mainCtrl'
      })
      .state('landing',{
        url:'/landing',
        templateUrl: 'views/landing.html',
        controller: 'landingCtrl'
      })
      .state('viewFriends',{
        url:'/viewFriends',
        templateUrl: 'views/viewFriends.html'
      })
      .state('findFriends',{
        url:'/findFriends',
        templateUrl: 'views/findFriends.html'
      })
      .state('updateProfile',{
        url:'/updateProfile',
        templateUrl: 'views/updateProfile.html',
        controller:'updateProfileCtrl'
      })

      $urlRouterProvider
            .otherwise('/');
  });

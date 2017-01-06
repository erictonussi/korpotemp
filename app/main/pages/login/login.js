'use strict';
angular.module('main')

.config(function ($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'main/pages/login/login.html',
      controller: 'LoginCtrl'
    });
})

.controller('LoginCtrl', function ($log, $scope) {
  $scope.user = {
    username: '',
    password: ''
  };
});

'use strict';
angular.module('main')

.config(function ($stateProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: 'main/pages/register/register.html',
      controller: 'RegisterCtrl'
    });
})

.controller('RegisterCtrl', function ($log, $scope) {
  $scope.user = {
    username: '',
    password: ''
  };
});

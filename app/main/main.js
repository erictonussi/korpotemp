'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

})

.run(function ($rootScope, $state) {
  $rootScope.$state = $state;
})
;

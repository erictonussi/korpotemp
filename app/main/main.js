'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    // .state('login', {
    //   url: '/login',
    //   // abstract: true,
    //   templateUrl: 'main/pages/login/login.html',
    //   controller: 'LoginCtrl'
    // })
    // .state('register', {
    //   url: '/register',
    //   // abstract: true,
    //   templateUrl: 'main/pages/register/register.html',
    //   controller: 'RegisterCtrl'
    // })

    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
    .state('main.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'main/templates/list.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })
    .state('main.listDetail', {
      url: '/list/detail',
      views: {
        'tab-list': {
          templateUrl: 'main/templates/list-detail.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })
    .state('main.debug', {
      url: '/debug',
      views: {
        'tab-debug': {
          templateUrl: 'main/templates/debug.html',
          controller: 'DebugCtrl as ctrl'
        }
      }
    })
    .state('main.config', {
      url: '/config',
      views: {
        'tab-config': {
          templateUrl: 'main/pages/config/config.html',
          controller: 'DebugCtrl as ctrl'
        }
      }
    })
  ;
});

'use strict';
angular.module('main')

.config(function ($stateProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/pages/main/tabs.html',
      controller: function($scope){
      }
    })

    .state('main.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'main/pages/main/home/home.html',
          controller: 'HomeCtrl as ctrl'
        }
      }
    })
    // .state('main.listDetail', {
    //   url: '/home/detail',
    //   views: {
    //     'tab-home': {
    //       templateUrl: 'main/pages/main/home/list-detail.html',
    //       // controller: 'SomeCtrl as ctrl'
    //     }
    //   }
    // })

    .state('main.charts', {
      url: '/charts',
      views: {
        'tab-charts': {
          templateUrl: 'main/pages/main/charts/charts.html',
          controller: 'ChartsCtrl as ctrl'
        }
      }
    })

    // .state('main.debug', {
    //   url: '/debug',
    //   views: {
    //     'tab-debug': {
    //       templateUrl: 'main/pages/main/debug/debug.html',
    //       controller: 'DebugCtrl as ctrl'
    //     }
    //   }
    // })

    .state('main.config', {
      url: '/config',
      views: {
        'tab-config': {
          templateUrl: 'main/pages/main/config/config.html',
          controller: 'ConfigCtrl as ctrl'
        }
      }
    })

    .state('main.configThemometers', {
      url: '/config/detail',
      views: {
        'tab-config': {
          templateUrl: 'main/pages/main/config/themometers/themometers.html',
          controller: 'ConfigThermometersCtrl as ctrl'
        }
      }
    })

    ;
})

// .controller('LoginCtrl', function ($log, $scope) {
//   $scope.user = {
//     username: '',
//     password: ''
//   };
// });

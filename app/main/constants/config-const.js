'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api',
    'SOME_OTHER_URL': '/postman-proxy',
    'nomes': [
      'Anthony Muniz',
      'Alice Schumacher',
      'Miguel Mazzaropi',
      'Luna Monteiro'
    ]
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

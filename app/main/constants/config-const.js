'use strict';
angular.module('main')
.constant('Config', {

  // gulp environment: injects environment vars
  ENV: {
    /*inject-env*/
    'SERVER_URL': 'https://DEVSERVER/api',
    'SOME_OTHER_URL': '/postman-proxy',
    'thermometers': [
      {
        'id': 1,
        'nome': 'Anthony Muniz'
      },
      {
        'id': 2,
        'nome': 'Alice Schumacher'
      },
      {
        'id': 3,
        'nome': 'Miguel Mazzaropi'
      },
      {
        'id': 4,
        'nome': 'Luna Monteiro'
      }
    ]
    /*endinject*/
  },

  // gulp build-vars: injects build vars
  BUILD: {
    /*inject-build*/
    /*endinject*/
  }

});

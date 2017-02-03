'use strict';
angular.module('korptemp', [
  // load your modules here
  'main', // starting with the main module
  'chart.js',
  'firebase'
])
.config( function () {

  // var config = {
  //   apiKey: 'AIzaSyAU95lF-SauY6hBoxmDLGbMD586Zk6XBrQ',
  //   authDomain: 'korptemp.firebaseio.com',
  //   databaseURL: 'https://korptemp.firebaseio.com',
  //   storageBucket: 'korptemp',
  //   // messagingSenderId: '<your-messaging-sender-id>'
  // };

  /*global firebase*/
  // firebase.initializeApp(config);

})
;

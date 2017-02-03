'use strict';
angular.module('main')
.controller('HomeCtrl', function ($scope, $ionicLoading, $firebaseArray, ThermometerList, Config) {

  // $ionicLoading.show();

  // var ref = firebase.database().ref().child('temperaturas');

  // // download the data into a local object
  // $scope.temperaturas = $firebaseArray(ref);
  // $scope.temperaturas.$loaded(function(temperaturas) {

  //   $ionicLoading.hide();

  //   updateChart();
  //   $scope.temperaturas.$watch(updateChart);

  //   function updateChart() {
  //     $scope.data = $scope.temperaturas.map(function(obj, index) {
  //       return {
  //         x: new Date(obj.data),
  //         y: obj.temperatura
  //       }
  //     });

  //     $scope.lastTemp = $scope.temperaturas.slice(-1).pop();
  //   }

  // });

  $scope.data = [
    {
      x: moment().add(-24, 'h'),
      y: 34.6
    },
    {
      x: moment().add(-12, 'h'),
      y: 38.9
    },
    {
      x: moment(),
      y: 37.2
    },
  ];

  updateData(Config.ENV.thermometers[0]);

  $scope.chooseThermometer = function() {
    ThermometerList.chooseThermometer()
      .then(function(res) {

        if ( res === undefined ) return;

        updateData(res);

      });
  };

  function updateData(thermometer) {

    $scope.thermometer = thermometer;

    var seed = thermometer.id;

    $scope.data = [
      {
        x: moment().add(-48, 'h'),
        y: 34.5 + Math.sqrt(random(seed*10 + 1) * 9)
      },
      {
        x: moment().add(-36, 'h'),
        y: 34.5 + Math.sqrt(random(seed*10 + 2) * 9)
      },
      {
        x: moment().add(-24, 'h'),
        y: 34.5 + Math.sqrt(random(seed*10 + 3) * 12)
      },
      {
        x: moment().add(-12, 'h'),
        y: 34.5 + Math.sqrt(random(seed*10 + 4) * 16)
      },
      {
        x: moment(),
        y: 34.5 + Math.sqrt(random(seed*10 + 5) * 9)
      },
    ];

    $scope.lastTemp = {
      data: new Date(+moment()),
      temperatura: 34.5 + Math.sqrt(random(seed*10 + 5) * 9)
    };

    function random(seed) {
      var x = Math.sin(seed) * 10012.13;
      return x - Math.floor(x);
    }
  }


});

'use strict';
angular.module('main')
.controller('HomeCtrl', function ($scope, $ionicLoading, $firebaseArray, ThermometerList) {

  $ionicLoading.show();

  var ref = firebase.database().ref().child('temperaturas');

  // download the data into a local object
  $scope.temperaturas = $firebaseArray(ref);
  $scope.temperaturas.$loaded(function(temperaturas) {

    $ionicLoading.hide();

    updateChart();
    $scope.temperaturas.$watch(updateChart);

    function updateChart() {
      $scope.data = $scope.temperaturas.map(function(obj, index) {
        return {
          x: new Date(obj.data),
          y: obj.temperatura
        }
      });

      $scope.lastTemp = $scope.temperaturas.slice(-1).pop();
    }

  });

  $scope.thermomers = [0,1,2,3,4,5];

  $scope.chooseThermometer = function() {
    ThermometerList.chooseThermometer().then(function(res) {
      console.log(res);
    });
  };


});
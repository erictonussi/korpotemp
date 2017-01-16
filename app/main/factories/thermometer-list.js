'use strict';
angular.module('main')
.factory('ThermometerList', function ($ionicPopup, $rootScope) {

  this.chooseThermometer = function() {

    var $scope = $rootScope.$new();

    $scope.thermometers = [0,1,2,3,4,5];

    $scope.selectThermometer = function(thermometer) {
      alertPopup.close(thermometer);
    }

    var alertPopup = $ionicPopup.alert({
      title: 'Selecione o termometro',
      buttons: [{ text: 'Cancelar' }],
      templateUrl: 'main/pages/main/home/thermometer-list.html',
      scope: $scope
    });

    return alertPopup;

    // alertPopup.then(function(res) {
    // });

  };



  return this;

});

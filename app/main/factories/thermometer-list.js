'use strict';
angular.module('main')
.factory('ThermometerList', function ($ionicPopup, $rootScope, Config) {

  this.chooseThermometer = function() {

    var $scope = $rootScope.$new();
    $scope.thermometers = Config.ENV.thermometers;

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

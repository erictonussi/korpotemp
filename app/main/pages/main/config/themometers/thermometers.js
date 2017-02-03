angular.module('main')

.controller('ConfigThermometersCtrl', function ($scope, Config) {

  $scope.thermometers = Config.ENV.thermometers;

});

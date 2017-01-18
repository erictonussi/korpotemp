'use strict';
angular.module('main')
.controller('ChartsCtrl', function ($scope, Config) {
  $scope.nomes = Config.ENV.nomes;

  $scope.filters = {
    selected: $scope.nomes[0],
    inicial: new Date(+moment().add(-7,'d')),
    final: new Date(+moment()),
  };

  // $scope.timeLimit = 48;

  // $scope.getData = function(argument) {
  //   return data;
  // }

  $scope.$watchCollection('filters', function (filters) {

    var data = [];
    var last = 36.5;

    var inicial = filters.inicial.getTime();
    var final = filters.final.getTime();
    var dateDiff = filters.final - filters.inicial;

    for (var i = 0; i <= dateDiff; i += 60 * 60 * 1000 ) {
      last += random(final - i)/2 - .25;

      data.push({
        x: new Date( final - i ),
        y: last//random(i) < .9 ? last : null
      });
    }

    $scope.data = data;

    // $scope.timeLimit = dateDiff / 1 / 60 / 60 / 1000;

    function random(seed) {
      var x = Math.sin(seed) * 10012.13;
      return x - Math.floor(x);
    }

  });

  // $scope.data = data;

});

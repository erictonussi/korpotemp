'use strict';
angular.module('main')
.directive('homeChart',function($interval, $ionicActionSheet, $timeout){
  return{
    restrict: 'E',
    // templateUrl: 'students.html'
    template: '<canvas id="myChart" class="chart" width="400" height="200"></canvas>',
    link: function(scope, element, attrs) {

      scope.$watch(attrs.data, function(newValue, oldValue) {

        if (newValue == oldValue) return;
        // debugger;

        myChart.data.datasets[0].data = newValue;

        moveChart();

      });

      var ctx = 'myChart';
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            // labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'Temperatura',
                data: [
                  {
                    x: new Date(),
                    y: 36.5
                  }
                ],
                backgroundColor: 'transparent',
                borderColor: '#fff',
                pointBackgroundColor: '#fff',
                // pointBorderColor: '#44b9af',
            }]
        },
        options: {
          scales: {
              xAxes: [{
                type: 'time',
                time: {
                },
                ticks: {
                  display: false,
                  // minRotation: 90,
                  // autoSkip: false,
                  fontSize: 1
                },
                gridLines: {
                  display: false,
                  drawTicks: false,
                },
              }],
              yAxes: [{
                ticks: {
                  // display: false,
                  mirror: true,
                  // stepSize: 1,
                  fontColor: '#fff',
                  padding: 2,
                  maxTicksLimit: 5,
                  suggestedMax: 37,
                  suggestedMin: 36.3,
                  fontSize: 10
                },
                gridLines: {
                  // display: false,
                  // tickMarkLength: 0,
                  drawTicks: false,
                  borderDash: [5,5],
                  // borderDashOffset: 15
                }
            }]
          },
          tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                // debugger;
                // let account: Account = that.accounts[tooltipItem.index];
                return tooltipItem.yLabel.toFixed(2).replace('.',',') + 'ºC';
              },
              title: function(tooltipItem, data) {
                // debugger;
                return moment(tooltipItem[0].xLabel).format('LT');
                // body...
              }
            }
          },
          onClick: function(e) {

            var element = this.getElementAtEvent(e);
            if ( !element.length ) showActionSheet();

          },
        },
      });

      $interval(moveChart, 10000);
      moveChart();

      var timeLimit = 24;

      function moveChart() {

        // myChart.data.datasets[0].data = myChart.data.datasets[0].data.filter(function(point) {
        //   return point.x > new Date( new Date().getTime() - 40 * 60 * 1000 );
        // });

        // myChart.update(0);

        myChart.options.scales.xAxes[0].time.min = new Date( new Date().getTime() - timeLimit * 60 * 60 * 1000 );
        myChart.options.scales.xAxes[0].time.max = new Date( new Date().getTime() - .5 * 1000 );

        myChart.update(0);

      }

       // Triggered on a button click, or some other target
      function showActionSheet() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: '<b>24</b> horas', limit: 24 },
            { text: '<b>12</b> horas', limit: 12 },
            { text: '<b>6</b> horas', limit: 6 },
          ],
          // destructiveText: 'Delete',
          titleText: 'Intervalo ',
          // cancelText: 'Cancel',
          // cancel: function() {
          //  // add cancel code..
          // },
          buttonClicked: function(index, value) {
            timeLimit = value.limit;
            moveChart();

            return true;
          }
        });

       // For example's sake, hide the sheet after two seconds
       // $timeout(function() {
       //   hideSheet();
       // }, 2000);

     };

    },
    controller: function() {
    }
  };
});
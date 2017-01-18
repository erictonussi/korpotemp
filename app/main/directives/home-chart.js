'use strict';
angular.module('main')
.directive('homeChart', function($interval, $ionicActionSheet) {
  return{
    restrict: 'E',
    // templateUrl: 'students.html'
    template: '<canvas width="400" height="200" class="drop-shadow"></canvas>',
    link: function(scope, element, attrs) { //debugger;

      var data = [];

      scope.$watch(attrs.data, function(newValue, oldValue) {

        // if (newValue == oldValue) return;
        // debugger;

        data = newValue.sort(function(a, b){
          return a.x-b.x
        });

        moveChart();

      });

      scope.$watch(attrs.timeLimit, function(newValue, oldValue) {

        // if (newValue == oldValue) return;
        // debugger;

        timeLimit = newValue;

        moveChart();

      });

      // var ctx = 'myChart';
      var ctx = element.children();
      /*global Chart*/
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
                borderWidth: 2,
                pointBackgroundColor: '#fff',
                pointBorderWidth: 0,
                // pointBorderColor: '#44b9af',
                pointRadius: 2,
                pointHitRadius: 15
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
                  // suggestedMax: 37,
                  // suggestedMin: 36.3,
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
                /*global moment*/
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

      var timeLimit = 0;

      function moveChart() {

        if ( timeLimit ) {

          var limit = moment().add( -timeLimit , 'h')
          myChart.data.datasets[0].data = data.filter(function(point, index) { //debugger;
            return index+2 >= data.length || data[index+2].x > limit;
          });

          var points = myChart.data.datasets[0].data.length;

          myChart.data.datasets[0].pointRadius =
            points < 10 ? 4 :
            points < 20 ? 3 :
            points < 30 ? 2 :
            points < 50 ? 1 : 0
          ;

          myChart.data.datasets[0].borderWidth = points < 15 ? 2 : 1;
          // myChart.update(0);

          myChart.options.scales.xAxes[0].time.min = moment().add(-timeLimit, 'h');
          myChart.options.scales.xAxes[0].time.max = moment();

        } else {

          myChart.data.datasets[0].data = data;

          myChart.data.datasets[0].pointRadius =
            data.length < 10 ? 4 :
            data.length < 20 ? 3 :
            data.length < 30 ? 2 :
            data.length < 50 ? 1 : 0
          ;

          myChart.data.datasets[0].borderWidth = data.length < 30 ? 2 : 1;

          myChart.options.scales.xAxes[0].time.min = null;
          myChart.options.scales.xAxes[0].time.max = null;

        }

        myChart.update(0);

      }

       // Triggered on a button click, or some other target
      function showActionSheet() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
          buttons: [
            { text: 'Gráfico completo', limit: 0 },
            { text: '<b>48</b> horas', limit: 48 },
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

     }

    },
    controller: function() {
    }
  };
});

angular.module('main')

.controller('HomeCtrl', function ($scope, $timeout, $interval) {

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
      type: 'LineAlt',
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
              pointBorderColor: '#44b9af',
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
                display: false,
                mirror: true,
                // stepSize: 1,
                // fontColor: 'red',
                padding: 2,
                maxTicksLimit: 5,
                suggestedMax: 37,
                suggestedMin: 36,
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
              return moment(tooltipItem[0].xLabel.format).format('LT');
              // body...
            }
          }
        }
      },
  });

  // debugger;

  var last = 36.5;

  // $interval(function () {

  //   myChart.data.datasets[0].data = myChart.data.datasets[0].data.filter(function(point) {
  //     return point.x > new Date( new Date().getTime() - 40 * 60 * 1000 );
  //   });


  //   if ( Math.random() > .9 ) {

  //     last += Math.random() * 1 - .5;

  //     if ( last > 42 ) last = 42;
  //     else if ( last < 36 ) last = 36;

  //     myChart.data.datasets[0].data.push(
  //       {
  //         x: new Date(),
  //         y: last
  //       }
  //     );

  //   }

  //   // myChart.update(0);

  //   myChart.options.scales.xAxes[0].time.min = new Date( new Date().getTime() - 30 * 60 * 1000 );
  //   myChart.options.scales.xAxes[0].time.max = new Date( new Date().getTime() - .5 * 1000 );

  //   myChart.update(0);

  // }, 10000);

});
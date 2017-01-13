'use strict';
angular.module('korptemp', [
  // load your modules here
  'main', // starting with the main module
  'chart.js'
])
.config( function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    chartColors: ['#FF5252', '#FF8A80'],
    // responsive: false
  });
  // Configure all line charts
  // ChartJsProvider.setOptions('LineAlt', {
  //   showLines: false
  // });

  // Chart.pluginService.register({
  //   beforeDraw: function(chart) {
  //     debugger;
  //     var width = chart.chart.width,
  //         height = chart.chart.height,
  //         ctx = chart.chart.ctx;

  //     ctx.restore();
  //     var fontSize = (height / 114).toFixed(2);
  //     ctx.font = fontSize + "em sans-serif";
  //     ctx.textBaseline = "middle";

  //     var text = "75%",
  //         textX = Math.round((width - ctx.measureText(text).width) / 2),
  //         textY = height / 2;

  //     ctx.fillText(text, textX, textY);
  //     ctx.save();
  //   }
  // });

  Chart.controllers.LineAlt = Chart.controllers.line.extend({
    name: "LineAlt",
    // initialize: function(data){
    //   Chart.controllers.line.prototype.initialize.apply(this, arguments);
    //   debugger;
    // },
    draw: function(ease){

      var ctx = this.chart.chart.ctx;

      var yRangeBegin = 37.3;
      var yRangeEnd = 37.8;

      var xaxis = this.chart.scales['x-axis-0'];
      var yaxis = this.chart.scales['y-axis-0'];
      // console.log(xaxis.left);

      var yRangeBeginPixel = yaxis.getPixelForValue(yRangeBegin);
      var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);
      var yRangeEndPixel2 = yaxis.getPixelForValue(50);

      ctx.beginPath();
      ctx.moveTo(0, yaxis.getPixelForValue(36.5));
      ctx.lineTo(xaxis.width,yaxis.getPixelForValue(36.5));
      ctx.lineWidth = .5;

      ctx.strokeStyle = 'rgba(0,0,0,.5)';
      ctx.stroke();

      ctx.fillText('36,5ºC', 0, yaxis.getPixelForValue(36.5) - 3);

      Chart.controllers.line.prototype.draw.apply(this, arguments);

      // ctx.save();

      // The fill style of the rectangle we are about to fill.
      ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
      // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
      // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
      ctx.fillRect(
        xaxis.left,
        Math.min(yRangeBeginPixel, yRangeEndPixel),
        xaxis.right - xaxis.left,
        Math.max(yRangeBeginPixel, yRangeEndPixel) - Math.min(yRangeBeginPixel, yRangeEndPixel)
      );

      // The fill style of the rectangle we are about to fill.
      ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
      // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
      // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
      ctx.fillRect(
        xaxis.left,
        Math.min(yRangeEndPixel, yRangeEndPixel2),
        xaxis.right - xaxis.left,
        Math.max(yRangeEndPixel, yRangeEndPixel2) - Math.min(yRangeEndPixel, yRangeEndPixel2)
      );

      // debugger;

      // // var
      //   // ctx = this.chart.ctx;
      //   // ctx.font = this.scale.font;
      //   // ctx.fillStyle = this.scale.textColor
      //   ctx.textAlign = "center";
      //   ctx.textBaseline = "bottom";

      //   // this.datasets.forEach(function (dataset) {
      //       this.getDataset().data.forEach(function (point) {

      //         if ( !point.y ) return;

      //           ctx.fillStyle = point.y > 37 ? '#f00' : '#666';

      //           ctx.fillText(point.y.toFixed(2), xaxis.getPixelForValue(point.x), yaxis.getPixelForValue(point.y) - 10);
      //       });
      //   // })

      // debugger;

      ctx.restore();

    }
  });

})
;
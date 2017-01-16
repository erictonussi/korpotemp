// Chart.controllers.LineAlt = Chart.controllers.line.extend({
//   name: "LineAlt",
//   // initialize: function(data){
//   //   Chart.controllers.line.prototype.initialize.apply(this, arguments);
//   //   debugger;
//   // },

//   draw2: function(ease) {

//     // Chart.controllers.line.prototype.draw.apply(this, arguments);

//     var ctx = this.chart.chart.ctx;

//     var yRangeBegin = 37.3;
//     var yRangeEnd = 37.8;

//     var xaxis = this.chart.scales['x-axis-0'];
//     var yaxis = this.chart.scales['y-axis-0'];
//     // console.log(xaxis.left);

//     var yRangeBeginPixel = yaxis.getPixelForValue(yRangeBegin);
//     var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);
//     var yRangeEndPixel2 = yaxis.getPixelForValue(50);

//     ctx.beginPath();
//     ctx.moveTo(0, yaxis.getPixelForValue(36.5));
//     ctx.lineTo(xaxis.width,yaxis.getPixelForValue(36.5));
//     ctx.lineWidth = .5;

//     ctx.strokeStyle = 'rgba(0,0,0,.5)';
//     ctx.stroke();

//     // ctx.fillText('36,5ºC', 0, yaxis.getPixelForValue(36.5) - 3);

//     // Chart.controllers.line.prototype.draw.apply(this, arguments);

//     // ctx.save();

//     // The fill style of the rectangle we are about to fill.
//     ctx.fillStyle = 'rgba(255, 255, 0, 0.5)';
//     // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
//     // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
//     ctx.fillRect(
//       xaxis.left,
//       Math.min(yRangeBeginPixel, yRangeEndPixel),
//       xaxis.right - xaxis.left,
//       Math.max(yRangeBeginPixel, yRangeEndPixel) - Math.min(yRangeBeginPixel, yRangeEndPixel)
//     );

//     // The fill style of the rectangle we are about to fill.
//     ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
//     // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
//     // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
//     ctx.fillRect(
//       xaxis.left,
//       Math.min(yRangeEndPixel, yRangeEndPixel2),
//       xaxis.right - xaxis.left,
//       Math.max(yRangeEndPixel, yRangeEndPixel2) - Math.min(yRangeEndPixel, yRangeEndPixel2)
//     );

//     // debugger;

//     // // var
//     //   // ctx = this.chart.ctx;
//     //   // ctx.font = this.scale.font;
//     //   // ctx.fillStyle = this.scale.textColor
//     //   ctx.textAlign = "center";
//     //   ctx.textBaseline = "bottom";

//     //   // this.datasets.forEach(function (dataset) {
//     //       this.getDataset().data.forEach(function (point) {

//     //         if ( !point.y ) return;

//     //           ctx.fillStyle = point.y > 37 ? '#f00' : '#666';

//     //           ctx.fillText(point.y.toFixed(2), xaxis.getPixelForValue(point.x), yaxis.getPixelForValue(point.y) - 10);
//     //       });
//     //   // })

//     // debugger;

//     ctx.restore();

//     Chart.controllers.line.prototype.draw.apply(this, arguments);

//   }
// });

Chart.plugins.register({
  beforeDraw: function(chartInstance, easing) {
    // chartInstance.chart.ctx

    var ctx = chartInstance.chart.ctx;

    // var yRangeBegin = 37.3;
    // var yRangeEnd = 37.8;

    var xaxis = chartInstance.scales['x-axis-0'];
    var yaxis = chartInstance.scales['y-axis-0'];
    // console.log(xaxis.left);

    var yRangeBeginPixel0 = yaxis.getPixelForValue(0);
    var yRangeBeginPixel = yaxis.getPixelForValue(35);
    var yRangeEndPixel = yaxis.getPixelForValue(37.3);
    var yRangeEndPixel2 = yaxis.getPixelForValue(37.8);
    var yRangeEndPixel3 = yaxis.getPixelForValue(50);

    ctx.beginPath();
    ctx.moveTo(0, yaxis.getPixelForValue(36.5));
    ctx.lineTo(xaxis.width,yaxis.getPixelForValue(36.5));
    ctx.lineWidth = .5;

    ctx.strokeStyle = 'rgba(0,0,0,.5)';
    ctx.stroke();

    // The fill style of the rectangle we are about to fill.
    ctx.fillStyle = '#68ADBA';
    // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
    // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
    ctx.fillRect(
      xaxis.left,
      Math.min(yRangeBeginPixel0, yRangeBeginPixel),
      xaxis.right - xaxis.left,
      Math.max(yRangeBeginPixel0, yRangeBeginPixel) - Math.min(yRangeBeginPixel0, yRangeBeginPixel)
    );

    // The fill style of the rectangle we are about to fill.
    ctx.fillStyle = '#E7C26F';
    // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
    // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
    ctx.fillRect(
      xaxis.left,
      Math.min(yRangeEndPixel, yRangeEndPixel2),
      xaxis.right - xaxis.left,
      Math.max(yRangeEndPixel, yRangeEndPixel2) - Math.min(yRangeEndPixel, yRangeEndPixel2)
    );

    // The fill style of the rectangle we are about to fill.
    ctx.fillStyle = '#9F6B73';
    // Fill the rectangle that represents the highlight region. The parameters are the closest-to-starting-point pixel's x-coordinate,
    // the closest-to-starting-point pixel's y-coordinate, the width of the rectangle in pixels, and the height of the rectangle in pixels, respectively.
    ctx.fillRect(
      xaxis.left,
      Math.min(yRangeEndPixel2, yRangeEndPixel3),
      xaxis.right - xaxis.left,
      Math.max(yRangeEndPixel2, yRangeEndPixel3) - Math.min(yRangeEndPixel2, yRangeEndPixel3)
    );

    ctx.restore();

  }
});
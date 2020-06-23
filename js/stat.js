'use strict';

(function () {

  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var SMALL_GAP = 10;
  var TEXT_GAP = 20;
  var MEDIUM_GAP = 30;
  var BIG_GAP = 40;
  var TIMES_GAP = 50;
  var BAR_WIDTH = 40;
  var MAX_BAR_HEIGHT = 150;
  var BAR_GAP = 50 + BAR_WIDTH;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderMessage = function (ctx, text, x, y) {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.textBaseline = 'hanging';
    ctx.fillText(text, x, y);
  };

  var getMaxElement = function (arr) {
    var maxElement = arr[0];

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  var getRandomNum = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CLOUD_X + SMALL_GAP, CLOUD_Y + SMALL_GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    renderMessage(ctx, 'Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
    renderMessage(ctx, 'Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + BIG_GAP);

    var maxTime = getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      var BAR_HEIGHT = -((MAX_BAR_HEIGHT * times[i]) / maxTime);
      var CONTENT_X = CLOUD_X + BIG_GAP + BAR_GAP * i;
      var CONTENT_Y = CLOUD_HEIGHT + CLOUD_Y;
      var randomNum = getRandomNum(100);

      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CONTENT_X, CONTENT_Y - TEXT_GAP);
      ctx.fillText(Math.round(times[i]), CONTENT_X, CONTENT_Y + BAR_HEIGHT - TIMES_GAP);

      ctx.fillStyle = (players[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + randomNum + '%, 50%)';

      ctx.fillRect(CONTENT_X, CONTENT_Y - MEDIUM_GAP, BAR_WIDTH, BAR_HEIGHT);
    }
  };
})();

'use strict';

(function () {

  var getRandomNum = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  window.colorize = function (feature, featureArr, inputValue) {
    feature.addEventListener('click', function () {
      if (feature.tagName.toLowerCase() === 'div') {
        feature.style.backgroundColor = featureArr[getRandomNum(featureArr.length)];
        inputValue.value = featureArr[getRandomNum(featureArr.length)];
      } else {
        feature.style.fill = featureArr[getRandomNum(featureArr.length)];
        inputValue.value = feature.style.fill;
      }
    });
  };
})();

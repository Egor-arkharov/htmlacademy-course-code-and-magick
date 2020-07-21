'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FAERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFirerball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatValue = setup.querySelector('input[name=coat-color]');
  var wizardEyesValue = setup.querySelector('input[name=eyes-color]');
  var fireballValue = setup.querySelector('input[name=fireball-color]');

  var wizard = {
    onCoatChange: function () {},
    onEyesChange: function () {}
  };

  var getRandomNum = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  wizardCoat.addEventListener('click', function () {
    var newColor = WIZARD_COAT_COLORS[getRandomNum(WIZARD_COAT_COLORS.length)];

    wizardCoat.style.fill = newColor;
    wizardCoatValue.value = newColor;

    wizard.onCoatChange(newColor);
  });

  wizardEyes.addEventListener('click', function () {
    var newColor = WIZARD_EYES_COLORS[getRandomNum(WIZARD_EYES_COLORS.length)];

    wizardEyes.style.fill = newColor;
    wizardEyesValue.value = newColor;

    wizard.onEyesChange(newColor);
  });

  wizardFirerball.addEventListener('click', function () {
    wizardFirerball.style.backgroundColor = WIZARD_FAERBALL_COLORS[getRandomNum(WIZARD_FAERBALL_COLORS.length)];
    fireballValue.value = WIZARD_FAERBALL_COLORS[getRandomNum(WIZARD_FAERBALL_COLORS.length)];
  });

  window.setup = wizard;
})();

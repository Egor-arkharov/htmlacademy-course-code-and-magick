'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFirerball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatValue = setup.querySelector('input[name=coat-color]');
  var wizardEyesValue = setup.querySelector('input[name=eyes-color]');
  var fireballValue = setup.querySelector('input[name=fireball-color]');
  var WIZARD_FAERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.colorize(wizardCoat, WIZARD_COAT_COLORS, wizardCoatValue);
  window.colorize(wizardEyes, WIZARD_EYES_COLORS, wizardEyesValue);
  window.colorize(wizardFirerball, WIZARD_FAERBALL_COLORS, fireballValue);
})();

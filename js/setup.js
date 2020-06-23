'use strict';

(function () {

  var setup = document.querySelector('.setup');
  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');
  var wizardFirerball = setup.querySelector('.setup-fireball-wrap');
  var wizardCoatValue = setup.querySelector('input[name=coat-color]');
  var wizardEyesValue = setup.querySelector('input[name=eyes-color]');
  var fireballValue = setup.querySelector('input[name=fireball-color]');
  var WIZARD_FAERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.colorize(wizardCoat, window.wizards.WIZARD_COAT_COLORS, wizardCoatValue);
  window.colorize(wizardEyes, window.wizards.WIZARD_EYES_COLORS, wizardEyesValue);
  window.colorize(wizardFirerball, WIZARD_FAERBALL_COLORS, fireballValue);
})();

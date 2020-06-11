'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FAERBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNum = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

var getWizard = function (names, surnames, coatColors, eyesColors) {
  var wizardObj = {
    name: names[getRandomNum(names.length)] + ' ' + surnames[getRandomNum(surnames.length)],
    coatColor: coatColors[getRandomNum(coatColors.length)],
    eyesColor: eyesColors[getRandomNum(eyesColors.length)]
  };

  return wizardObj;
};

var getWizards = function () {
  var wizardArr = [];
  for (var i = 0; i < 4; i++) {
    var wizardRandom = getWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);
    wizardArr.push(wizardRandom);
  }

  return wizardArr;
};

var wizards = getWizards();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var addFragment = function () {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

addFragment();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
var wizardFirerball = setup.querySelector('.setup-fireball-wrap');
var wizardCoatValue = setup.querySelector('input[name=coat-color]');
var wizardEyesValue = setup.querySelector('input[name=eyes-color]');
var fireballValue = setup.querySelector('input[name=fireball-color]');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var getWizardFeatureColor = function (feature, featureArr, inputValue) {
  feature.addEventListener('click', function () {
    feature.style.fill = featureArr[getRandomNum(featureArr.length)];
    inputValue.value = feature.style.fill;
  });
};

var getFirerballColor = function (feature, featureArr, inputValue) {
  feature.addEventListener('click', function () {
    feature.style.backgroundColor = featureArr[getRandomNum(featureArr.length)];
    inputValue.value = featureArr[getRandomNum(featureArr.length)];
  });
};

getWizardFeatureColor(wizardCoat, WIZARD_COAT_COLORS, wizardCoatValue);
getWizardFeatureColor(wizardEyes, WIZARD_EYES_COLORS, wizardEyesValue);
getFirerballColor(wizardFirerball, WIZARD_FAERBALL_COLORS, fireballValue);

'use strict';

(function () {
  var setup = document.querySelector('.setup');
  var form = setup.querySelector('.setup-wizard-form');

  var wizardCoat = setup.querySelector('.wizard-coat');
  var wizardEyes = setup.querySelector('.wizard-eyes');

  var hideSetup = function () {
    setup.classList.add('hidden');
  };

  var submitHandler = function (evt) {
    window.backendSave(new FormData(form), hideSetup, window.wizards.errorHandler);

    form.reset();
    wizardCoat.style.fill = 'rgb(101, 137, 164)';
    wizardEyes.style.fill = 'black';

    evt.preventDefault();
  };

  form.addEventListener('submit', submitHandler);
})();

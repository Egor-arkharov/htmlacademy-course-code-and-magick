'use strict';

window.utile = (function () {

  var EvtKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape'
  };

  return {
    EvtKeys: EvtKeys,
    isEscEvent: function (evt, action) {
      if (evt.key === EvtKeys.ESCAPE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.key === EvtKeys.ENTER) {
        action();
      }
    }
  };
})();

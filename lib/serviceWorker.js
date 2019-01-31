(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.serviceWorker = factory());
}(this, function () { 'use strict';

  var serviceWorker = function serviceWorker() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (process.env.NODE_ENV === 'production') {
      var OfflinePluginRuntime = require('offline-plugin/runtime');

      var defaultOptions = {
        onUpdating: function onUpdating() {
          return undefined;
        },
        // When an update is ready we will tell the new SW to take control immediately.
        onUpdateReady: function onUpdateReady() {
          return OfflinePluginRuntime.applyUpdate();
        },
        // After the new SW update has been applied we will reload the users page
        // to ensure they are using the latest assets.
        // This only gets run if there were updates available for our cached assets.
        onUpdated: function onUpdated() {
          return window.location.reload();
        },
        onUpdateFailed: function onUpdateFailed() {
          return undefined;
        }
      };
      OfflinePluginRuntime.install(Object.assign({}, defaultOptions, options));
    }

    console.log('service worker installed');
  };

  return serviceWorker;

}));

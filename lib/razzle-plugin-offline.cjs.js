'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var OfflinePlugin = _interopDefault(require('offline-plugin'));

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function myRazzlePlugin(config, env, webpack, options) {
  var target = env.target,
      dev = env.dev;

  if (target === 'web' && !dev) {
    // client production only
    console.log('Adding service worker');
    var defaultOptions = {
      externals: ['/', '/assets.json', 'static/*'],
      caches: {
        main: ['/', ':rest:']
      },
      ServiceWorker: {
        events: true
      }
    };
    config.plugins = [].concat(_toConsumableArray(config.plugins), [new OfflinePlugin(Object.assign({}, defaultOptions, options))]);
  }

  return config;
}

module.exports = myRazzlePlugin;

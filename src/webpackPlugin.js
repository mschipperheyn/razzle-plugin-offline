import OfflinePlugin from 'offline-plugin';

function myRazzlePlugin(config, env, webpack, options) {
  const { target, dev } = env;

  if (target === 'web' && !dev) {
    // client production only
    console.log('Adding service worker');

    const defaultOptions = {
      excludes: ['**/*.map'],
      updateStrategy: 'changed',
      autoUpdate: true,
      externals: ['/', '/assets.json', 'static/*'],
      caches: {
        main: ['/', ':rest:']
      },
      ServiceWorker: {
        events: true
      }
    };

    config.plugins = [
      ...config.plugins,
      new OfflinePlugin(Object.assign({}, defaultOptions, options))
    ];
  }

  return config;
}

export default myRazzlePlugin;

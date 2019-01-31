import OfflinePlugin from 'offline-plugin';

function myRazzlePlugin(config, env, webpack, options) {
  const { target, dev } = env;

  if (target === 'web' && !dev) {
    // client production only
    console.log('Adding service worker');
    config.plugins = [
      ...config.plugins,
      new OfflinePlugin({
        events: true
      })
    ];
  }

  return config;
}

export default myRazzlePlugin;

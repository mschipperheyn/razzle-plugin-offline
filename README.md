# Razzle Plugin Offline

Adds a [NekR/offline-plugin](https://github.com/NekR/offline-plugin) serviceworker to your [Razzle](https://github.com/jaredpalmer/razzle) implementation.

## Installation

`yarn add -D razzle-plugin-offline`

## Configuration

Edit or create `razzle.config.js` in your project root.

```
// razzle.config.js
module.exports = {
  plugins: ['offline'],
};
```

## Add serviceWorker to client

At the bottom of your `src/client.js` add

```
if (process.env.NODE_ENV === 'production') {
  require('razzle-plugin-offline/lib/serviceWorker')();
}

```

## Adding serviceWorker options

Options are optional and should be based on [NekR/offline-plugin](https://github.com/NekR/offline-plugin/blob/master/docs/options.md)

```
if (process.env.NODE_ENV === 'production') {
  const options = {
      // my options
  };
  require('razzle-plugin-offline/lib/serviceWorker')(options);
}
```

# License

[MIT](./LICENSE)

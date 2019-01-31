import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import BrowserRouter from 'react-router-dom/BrowserRouter';

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'production') {
  // Options are optional and should be based on https://github.com/NekR/offline-plugin/blob/master/docs/options.md
  const options = {};
  require('razzle-plugin-offline/lib/serviceWorker')(options);
}

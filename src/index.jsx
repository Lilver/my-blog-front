import React from 'react';
import ReactDOM from 'react-dom';

import App from './page/App/index.jsx'

import './index.css';

if ('serviceWorker' in Navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      // console.log(`service-worker registed: ${registration}`);
    }).catch(error => {
      // console.log(`service-worker registed error: ${error}`);
    });
  });
}

ReactDOM.render(
  <App />, document.getElementById('app'),
);
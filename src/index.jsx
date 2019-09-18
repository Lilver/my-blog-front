import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './page/App/index.jsx';

import './index.css';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>, document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
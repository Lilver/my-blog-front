import React, { PureComponent } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import moduleName from 'module'
import Player from 'components/Player/Player.jsx';
import './style.less';

import HomePage from '../HomePage/index.jsx';

class App extends PureComponent {
  render() {
    return (
      <div className="app-body">
        <Player />
        <BrowserRouter>
          <Route path="/" component={HomePage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

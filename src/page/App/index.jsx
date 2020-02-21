import React, { PureComponent } from 'react';
import { withRouter, BrowserRouter } from 'react-router-dom';

import Player from 'components/Player/index.jsx';
import Router from '../../router/index.jsx';
// import BackgroundSpan from 'components/BackgroundSpan/index.jsx';

import Style from './style.less';

class App extends PureComponent {
  render() {    
    return (
      <div className={Style.appBody}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <Player />
      </div>
    );
  }
}

export default App;

import React, { PureComponent } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Nav from 'components/NavigationBar/CommonNav/index.jsx';
import Player from 'components/Player/index.jsx';
// import BackgroundSpan from 'components/BackgroundSpan/index.jsx';

import Style from './style.less';

import HomePage from '../HomePage/index.jsx';
import Me from '../AboutMe/index.jsx';

class App extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className={Style.appBody}>
          <Player />
          <BrowserRouter>
            <Nav />
            
            <Route path="/index" component={HomePage} />
            <Route path="/me" component={Me} />
            <Redirect from="/" to="/index" />
          </BrowserRouter>
        </div>

      </React.Fragment>
    );
  }
}

export default App;

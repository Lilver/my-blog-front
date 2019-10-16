import React, { PureComponent } from 'react';
import { 
  BrowserRouter, Route, Switch, 
} from 'react-router-dom';

import Nav from 'components/NavigationBar/CommonNav/index.jsx';
import Player from 'components/Player/index.jsx';
// import BackgroundSpan from 'components/BackgroundSpan/index.jsx';

import Style from './style.less';

import HomePage from '../page/HomePage/index.jsx';
import Me from '../page/AboutMe/index.jsx';

class App extends PureComponent {
  render() {
    return (
      <div className={Style.appBody}>
        <Player />
        <BrowserRouter>
          <Nav />
          <Switch>
            <Route path="/me" component={Me} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

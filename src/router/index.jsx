import React, { PureComponent } from 'react';
import {  Route, Switch, withRouter } from 'react-router-dom';

import Nav from 'components/NavigationBar/CommonNav/index.jsx';
import HomePage from '../page/HomePage/index.jsx';
import Me from '../page/AboutMe/index.jsx';

class Router extends PureComponent {
  render() {    
    return (
      <React.Fragment>
        <Route path="/me" exact component={Me} />
        <Route path="/" component={HomePage} />
        <Nav />
      </React.Fragment>
    );
  }
}

export default withRouter(Router);

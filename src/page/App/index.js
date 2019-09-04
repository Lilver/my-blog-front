import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import NavigationBar from '../../components/NavigationBar';
import Player from '../../components/Player'
import './style.less';

import HomePage from '../HomePage';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <NavigationBar/>
        <Player/>
        <BrowserRouter>
          <Route path="/" component={HomePage}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
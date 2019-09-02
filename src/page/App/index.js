import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import './style.less';

import HomePage from '../HomePage';

class App extends Component {
  render() {
    return (
      <div className="app-body">
        <BrowserRouter>
          <Route path="/" component={HomePage}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
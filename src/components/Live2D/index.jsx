import React, { Component } from 'react';

import Style from './style.less';

export default class Live2D extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = require('../../utils/live2d.min.js');
    document.getElementsByTagName('head')[0].appendChild(script);
    script.onload = () => {
      // window.loadlive2d("live2d", require('../../assets/live2d/miku/15.json'));
    };
  }
  
  render() {
    return (
      <canvas className={Style.live2d} />
    );
  }
}

import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Style from './style.less';

class CommonNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabBars: [
        {
          id: 0,
          name: '主 页',
          path: '/index',
        },
        {
          id: 1,
          name: '个人信息',
          path: '/me',
        },
        {
          id: 2,
          name: '相 册',
          path: '/album',
        },
      ],
    };
  }

  render() {
    const { tabBars } = this.state;
    return (
      <div className={Style.nav}>
        <div className={Style.portrait}>
          <img src={require('assets/img/icon.jpeg')} alt="icon" />
        </div>
        {
          tabBars.map((bar) => (
            <Link className={Style.tabBar} key={bar.id} to={bar.path}><span>{bar.name}</span></Link>
          ))
        }
      </div>
    );
  }
}

export default CommonNav;
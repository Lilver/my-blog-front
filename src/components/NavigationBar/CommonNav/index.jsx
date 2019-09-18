import React, { Component } from 'react';
import classNames from 'classnames';

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
          path: '/',
        },
        {
          id: 1,
          name: '个人简历',
          path: '/me',
        },
        {
          id: 2,
          name: '相 册',
          path: '/album',
        },
      ],

      activeBar: parseInt(sessionStorage.getItem('nav-active-bar'), 10) || 0,
    };
  }


  toggleBar = (barId) => {
    sessionStorage.setItem('nav-active-bar', barId);
    this.setState({
      activeBar: barId,
    });
  }

  render() {
    const { tabBars, activeBar } = this.state;
    return (
      <div className={Style.nav}>
        <div className={Style.portrait}>
          <img src={require('assets/img/icon.jpeg')} alt="icon" />
        </div>
        {
          tabBars.map((bar) => (
            <Link
              className={classNames(Style.tabBar, { [Style.activeBar]: activeBar === bar.id })} key={bar.id} to={bar.path} onClick={() => this.toggleBar(bar.id)}><span>{bar.name}</span>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default CommonNav;
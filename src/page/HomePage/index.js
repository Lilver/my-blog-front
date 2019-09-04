import React, { Component } from 'react'

import Style from './style.less';

class HomePage extends Component {
  render() {
    return (
      <main className={Style.container}>
        <section className={Style.banner}/>
      </main>
    )
  }
}

export default HomePage;

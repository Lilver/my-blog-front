import React, { Component } from 'react';

import Style from './style.less';

// import DigiClock from '../../components/DigiClock';

class HomePage extends Component {
  render() {
    return (
      <main className={Style.container}>
        <section className={Style.banner}>
          <div className={Style.title}>
            <div className={Style.letter}>L</div>
            <div className={Style.letter}>i</div>
            <div className={Style.letter}>l</div>
            <div className={Style.letter}>v</div>
            <div className={Style.letter}>e</div>
            <div className={Style.letter}>r</div>
            <div className={Style.letter}>的</div>
            <div className={Style.letter}>小</div>
            <div className={Style.letter}>屋</div>
          </div>
        </section>
        {/* <DigiClock/> */}
        
      </main>
    );
  }
}

export default HomePage;

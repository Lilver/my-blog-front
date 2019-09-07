import React, { Component } from 'react';
import dayjs from 'dayjs';

import Style from './style.less';

export default class DigiClock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      h: dayjs().hour(),
      m: dayjs().minute(),
      s: dayjs().second() < 10 ? `0${dayjs().second()}` : dayjs().second(),
    };
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      h: dayjs().hour(),
      m: dayjs().minute(),
      s: dayjs().second() < 10 ? `0${dayjs().second()}` : dayjs().second(),
    });
  }

  render() {
    const { h, m, s } = this.state;
    return (
      <div className={Style.clock}>
        {h}
:
        {m}
:
        {s}
      </div>
    );
  }
}

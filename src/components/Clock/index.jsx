import React, { Component } from 'react';

import './style.css';

export default class Clock extends Component {
  componentDidMount() {
    this.data = {
      dt: new Date(),
      hours: {
        el: this.h,
        val: 0,
      },
      minutes: {
        el: this.m,
        val: 0, 
      },
      seconds: {
        el: this.s,
        val: 0, 
      },
      renderTime: 1000, 
    };

    this.data.seconds.el.addEventListener('transitionend', () => {
      this.data.hours.el.classList.remove('moving');
      this.data.minutes.el.classList.remove('moving');
      this.data.seconds.el.classList.remove('moving');
    
      if (this.data.hours.val === 360) {
        this.data.hours.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
      }
    
      if (this.data.minutes.val === 360) {
        this.data.minutes.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
      }
    
      if (this.data.seconds.val === 360) {
        this.data.seconds.el.style.transform = 'translate(-50%, -75%) rotate(0deg)';
      }
    });

    setInterval(() => {
      this.updateTime();
    }, this.data.renderTime);
    
    this.updateTime();
  }
  
  updateTime = () => {
    const { data } = this;
    const hour = data.dt.getHours();
    const minute = data.dt.getMinutes();
    const second = data.dt.getSeconds();
  
    data.hours.el.classList.add('moving');
    data.minutes.el.classList.add('moving');
    data.seconds.el.classList.add('moving');
  
    data.hours.val = hour === 0 && data.hours.val === 59 * 6 * 5 ? 360 : hour * 6 * 5;
    data.minutes.val = minute === 0 && data.minutes.val === 59 * 6 ? 360 : minute * 6;
    data.seconds.val = second === 0 && data.seconds.val === 59 * 6 ? 360 : second * 6;
  
    data.hours.el.style.transform = `translate(-50%, -75%) rotate(${data.hours.val}deg)`;
    data.minutes.el.style.transform = `translate(-50%, -75%) rotate(${data.minutes.val}deg)`;
    data.seconds.el.style.transform = `translate(-50%, -75%) rotate(${data.seconds.val}deg)`;
  
    data.dt.setSeconds(second + 1);
  };


  render() {
    return (
      <div className="clock">
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="memory" />
        <div className="needle" id="hours" ref={(h) => { this.h = h; }} />
        <div className="needle" id="minutes" ref={(m) => { this.m = m; }} />
        <div className="needle" id="seconds" ref={(s) => { this.s = s; }} />
      </div>
    );
  }
}
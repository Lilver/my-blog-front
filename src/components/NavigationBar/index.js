import React from 'react';
import { Link } from 'react-router-dom';

import Style from './style.less';


class NavigationBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showNav: true
    }
  }

  componentDidMount() {

  }
  

  scrollShowBar = () => {
    if(document.addEventListener){ 
      window.addEventListener('scroll', this.scrollFunc, false);
    }
    window.onmousewheel = document.onmousewheel = this.scrollFunc;
  }

  toggleBar = (bool) => {
    this.setState({
      showNav: bool
    });
  }

  scrollFunc = (event) => {
    const e = event || window.event;
    if (e.wheelDelta) {
      console.log(e.wheelDelta);

      if (e.wheelDelta > 20) { //当滑轮向上滚动时  
        this.toggleBar(true);
      }  
      if (e.wheelDelta < -20) { //当滑轮向下滚动时  
        this.toggleBar(false);
      }  
    } else if (e.detail) {  //Firefox滑轮事件  
      if (e.detail> 20) { //当滑轮向上滚动时  
        this.toggleBar(true);
      }  
      if (e.detail< -20) { //当滑轮向下滚动时  
        this.toggleBar(false);
      }  
    }
  }



  render() {
    const { showNav } = this.state;
    return (
      showNav ? 
      <React.Fragment>
        <nav className={Style.bar}>
          <div className={Style.portrait}>
            <img src={require('../../assets/img/icon.jpeg')} alt="icon"/>
          </div>


          <div className={Style.link}>
            <div className={Style.linkBtn}>个人信息</div>
          </div>
          <div className={Style.link}>
            <div className={Style.linkBtn}>文  章</div>
            <ul className={Style.sonLinks}>
              
            </ul>
          </div>
          <div className={Style.link}>
            <div className={Style.linkBtn}>相  册</div>
          </div>
        </nav>
      </React.Fragment> : null

    )
  }
}

export default NavigationBar;

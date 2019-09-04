import React, { Component } from 'react'
import classNames from 'classnames';

import Style from './style.less';

const playerList = [
  {
    name: 'からくりピエロ',
    singer:'初音ミク',
    cover: 'https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=2d3495d4af773912c4738d67c829aa20/bba1cd11728b471062252ea5c5cec3fdfc032355.jpg',
    url: 'http://www.ytmp3.cn/down/53279.mp3',
  },
  {
    name: 'しんかいしょうじょ',
    singer:'初音ミク',
    cover: 'http://img4.duitang.com/uploads/blog/201409/06/20140906104534_LEv5F.jpeg',
    url: 'http://www.ytmp3.cn/down/53276.mp3',
  }
]

class Player extends Component {
  constructor(props){
    super(props);

    this.state = {
      isPlaying: true,
    }
  }

  componentDidMount = () => {
    document.body.onmousemove = this.clickMove;
    document.body.onmouseup = this.clickUp;
    this.player.style.left = '20px';
    this.player.style.top = '70px';
  }

  clickDown = (e) => {
    this.beginDrag = true;
    this.player.style.transition = '0s';
    // this.startTime = new Date().getTime;
    this.mouseStartX = e.clientX;
    this.mouseStartY = e.clientY;
    const playRect = this.player.getBoundingClientRect();
    
    this.playerStartX = playRect.x;
    this.playerStartY = playRect.y;
  }

  clickMove = (e) => {
    if (!this.beginDrag) {
      return;
    }
    e.preventDefault();
    const moveX = e.clientX - this.mouseStartX;
    const moveY = e.clientY - this.mouseStartY;
    
    
    this.player.style.left = `${this.playerStartX + moveX}px`
    this.player.style.top = `${this.playerStartY + moveY}px`
    console.log(moveX, 'left',moveX, 'top');
  }

  clickUp = (e) => {
    //吸附
    this.beginDrag = false;
    const playRect = this.player.getBoundingClientRect();
    const { y, x } =  playRect;
    const clientWidth = document.body.clientWidth;
    this.player.style.transition = '0.5s';
    if (x > clientWidth/2 - 100 ) {
      this.player.style.left = `${clientWidth - this.player.clientWidth - 20}px`;
    } else {
      this.player.style.left = '20px';
    }

    if (y < 50) {  //防止挡住导航
      this.player.style.top = '70px';
    }
  }
  

  togglePlay = () => {
    const { isPlaying } = this.state;
    this.setState({
      isPlaying: !isPlaying
    });
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <div 
        className={Style.player}
        ref={p => (this.player = p)}
        onMouseDown={this.clickDown}
      >
        <div className={Style.tv}><img src={require('../../assets/icon/icon_tv_2.svg')}/></div>
        <div className={Style.cover}><img src={require('/Users/Lilver/Desktop/miku_Img/music/しんかいしょうじょ.jpg')}/></div>
        <div className={Style.btnRow}>
          <img src={require('../../assets/icon/icon_back.svg')} className={Style.btn}/>
          <div className={classNames({[Style.isPlaying]: isPlaying}, Style.playControlBtn)} onClick={this.togglePlay}/>
          <img src={require('../../assets/icon/icon_forward.svg')} className={Style.btn}/>
        </div>
      </div>
    )
  }
}

export default Player;

import React, { Component } from 'react';
import classNames from 'classnames';

import Style from './style.less';
const playerList = [
  {
    name: 'からくりピエロ',
    singer: '初音ミク',
    cover: 'http://pxaxq1pkc.bkt.clouddn.com/image/song%E3%81%8B%E3%82%89%E3%81%8F%E3%82%8A%E3%83%92%E3%82%9A%E3%82%A8%E3%83%AD%28%E6%B4%BB%E5%8A%A8%E5%B0%8F%E4%B8%91%29.jpg',
    url: 'http://www.ytmp3.cn/down/53279.mp3',
  },
  {
    name: 'しんかいしょうじょ',
    singer: '初音ミク',
    cover: 'http://pxaxq1pkc.bkt.clouddn.com/image/song%E3%81%97%E3%82%93%E3%81%8B%E3%81%84%E3%81%97%E3%82%87%E3%81%86%E3%81%97%E3%82%99%E3%82%87%28%E6%B7%B1%E6%B5%B7%E5%B0%91%E5%A5%B3%29.jpg',
    url: 'http://www.ytmp3.cn/down/53276.mp3',
  }
];

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      list: playerList,
      index: 0,
      showTip: true,
    };
  }

  componentDidMount = () => {
    this.initDrag();
    this.initSound();
  }


  initDrag = () => {
    document.body.onmousemove = this.clickMove;
    document.body.onmouseup = this.clickUp;
    this.player.style.left = '20px';
    this.player.style.top = '70px';

    window.onresize = this.clickUp;
  }

  clickDown = (e) => {
    e.preventDefault();
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
    e.preventDefault();
    if (!this.beginDrag) {
      return;
    }
    const moveX = e.clientX - this.mouseStartX;
    const moveY = e.clientY - this.mouseStartY;
    this.player.style.left = `${this.playerStartX + moveX}px`;
    this.player.style.top = `${this.playerStartY + moveY}px`;
  }
   
  clickUp = (e) => {
    e.preventDefault();
    this.beginDrag = false;
    const playRect = this.player.getBoundingClientRect();
    const { y, x } = playRect;
    const { clientWidth } = document.body;
    this.player.style.transition = '0.5s';
    if (x > clientWidth / 2 - 100) {
      this.player.style.left = `${clientWidth - this.player.clientWidth - 20}px`;
    } else {
      this.player.style.left = '20px';
    }

    if (y < 50) {
      // 防止挡住导航
      this.player.style.top = '70px';
    }
  }
  

  togglePlay = () => {
    const { isPlaying } = this.state;
    if (isPlaying) {
      this.sound.pause();
    } else {
      this.sound.play();
    }
    this.setState({
      isPlaying: !isPlaying,
      showTip: false,
    });
    
  }

  initSound = () => {
    const { index, list } = this.state;
    if (list.length === 0) {
      return;
    }
    this.sound.src = list[index].url;
    this.sound.onended = this.nextSong;

    // this.playSound();

  }

  prevSong = () => {
    const { index, list } = this.state;
    this.setState({
      index: index === 0 ? list.length - 1 : index - 1
    }, () => {
      this.playSound();
    });
  }

  nextSong = () => {
    const { index, list } = this.state;    
    this.setState({
      index: index === list.length - 1 ? 0 : index + 1
    }, () => {
      this.playSound();
    });
  }

  playSound = () => {
    const { index, list } = this.state;
    this.sound.pause();
    this.sound.src = list[index].url;
    this.sound.oncanplay = () => {
      this.sound.play();
      this.setState({
        isPlaying: true,
      });
    };
  }

  

  render() {
    const { isPlaying, list, index, showTip } = this.state;
    return (
      <div 
        className={Style.player}
        ref={p => (this.player = p)}
        onMouseDown={this.clickDown}
        style={{'display': list.length > 0 ? 'block': 'none'}}
      >
        { showTip ? <div className={Style.tip}>戳我播放bgm<br/>_(:з」∠)_</div> : null}
        <audio
          className={Style.audio}
          ref={s => (this.sound = s)}
        />
        <div className={Style.tv}><img src={require('../../assets/icon/icon_tv_2.svg')}/></div>
        <div className={classNames(Style.cover, Style.screen)} style={{'backgroundImage': `url(${list[index].cover})`, }}>
          <div className={classNames(Style.mikuDance, {[Style.hidden]: !isPlaying})}>
            <img src={require('../../assets/img/miku.gif')} />
          </div>
        </div>
        <div className={classNames(Style.intro, Style.screen)}>{list[index].name} - {list[index].singer}</div>
        <div className={Style.btnRow}>
          <img src={require('../../assets/icon/icon_back.svg')} className={Style.btn} onClick={this.prevSong}/>
          <div className={classNames({[Style.isPlaying]: isPlaying}, Style.playControlBtn)} onClick={this.togglePlay} />
          <img src={require('../../assets/icon/icon_forward.svg')} className={Style.btn} onClick={this.nextSong} alt="next"/>
        </div>
      </div>
    );
  }
}

export default Player;

import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
// import dayJs from 'dayjs';

import Style from './style.less';


class AboutMe extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    document.title = "关于我";
  }

  getOption = () => {
    return {
      // color: ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
      tooltip: {},
      xAxis: {
        data: ["HTML", "JavaScript", "CSS", "Golang", "网络"],
      },
      yAxis: {
      },
      series: [{
        name: '熟练度',
        type: 'bar',
        data: [80, 85, 75, 70, 70],
        itemStyle: {
          normal: {
            color: (params) => {
              const colorList = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622'];
              return colorList[params.dataIndex];
            },
          },
        },
        label: {
          show: "true",
          position: "top",
          color: "auto",
          fontWeight: "bolder",
          backgroundColor: "rgba(0,0,0,0)",
          fontSize: "20",
        },
      }],
    };
  }
  
  render() {
    return (
      <div className={Style.container}>
        <header className={Style.header}>
          <div className={Style.maskHeader}>
            <div className={Style.title}>SELF-INTRO</div>
            <div className={Style.position}>Web Developer</div>
            <div className={Style.portraitContainer}>
              <div className={Style.portrait}>
                <img src={require('../../assets/img/icon.jpeg')} alt="portrait" />
              </div>
            </div>
          </div>
        </header>
        
        <main className={Style.introBody}>
          {/* 个人基本信息 */}
          <div className={Style.introBlock}>
            <div className={Style.itemHeader}>
              <div className={Style.itemTitle}>About Me</div>
              <div className={Style.underline}>
                <div className={Style.ball} />
                <div className={Style.line} />
              </div>
            </div>
            <section className={Style.detail}>
              <div className={Style.infoRow}>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_user.svg')} alt="user" />
                  <span>名称：</span>
                  <span>Lilver</span>
                </div>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_briefcase.svg')} alt="user" />
                  <span>职位：</span>
                  <span>前端开发工程师</span>
                </div>
              </div>
              <div className={Style.infoRow}>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_github.svg')} alt="user" />
                  <span>github：</span>
                  <span>点此链接</span>
                </div>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_email.svg')} alt="user" />
                  <span>邮箱：</span>
                  <span>dongd612@163.com</span>
                </div>
              </div>
            </section>
          </div>

          <div className={Style.introBlock}>
            <div className={Style.itemHeader}>
              <div className={Style.itemTitle}>Skills</div>
              <div className={Style.underline}>
                <div className={Style.ball} />
                <div className={Style.line} />
              </div>
            </div>
            <section className={Style.detail}>
              <ReactEcharts
                option={this.getOption()}
                style={{ height: '500px', width: '60%' }}
              />
            </section>
          </div>

          <div className={Style.introBlock}>
            <div className={Style.itemHeader}>
              <div className={Style.itemTitle}>Introduction</div>
              <div className={Style.underline}>
                <div className={Style.ball} />
                <div className={Style.line} />
              </div>
            </div>
            <section className={Style.detail}>
              <div className={Style.intro}>一个二刺螈Web开发者，会点美术，会点技术，会点吹比，会点游戏。</div>
            </section>
          </div>

          <div className={Style.thanksWindow}>
            <div className={Style.portrait}>
              <img src={require('../../assets/img/love.gif')} alt="love" />
            </div>
          </div>
          
        </main>

      </div>
    );
  }
}

export default AboutMe;

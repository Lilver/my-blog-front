import React, { Component } from 'react';
import dayJs from 'dayjs';
import Style from './style.less';

class AboutMe extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    document.title = "关于我";
  }
  
  render() {
    return (
      <div className={Style.container}>
        <header className={Style.header}>
          <div className={Style.maskHeader}>
            <div className={Style.title}>RESUME</div>
            <div className={Style.position}>Web Developer</div>
            <div className={Style.portraitContainer}>
              <div className={Style.portrait}>
                <img src={require('../../assets/img/icon.jpeg')} alt="portrait" />
              </div>
            </div>
          </div>
        </header>
        
        <main className={Style.resumeBody}>
          {/* 个人基本信息 */}
          <div className={Style.resumeBlock}>
            <div className={Style.itemHeader}>
              <div className={Style.itemTitle}>About Me</div>
              <div className={Style.underline}>
                <div className={Style.ball} />
                <div className={Style.line} />
              </div>
            </div>
            <section className={Style.baseInfo}>
              <div className={Style.infoRow}>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_user.svg')} alt="user" />
                  <span>姓名：</span>
                  <span>陈铒东</span>
                </div>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_calendar.svg')} alt="user" />
                  <span>出生年月：</span>
                  <span>1995.6</span>
                </div>
              </div>
              <div className={Style.infoRow}>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_briefcase.svg')} alt="user" />
                  <span>职位：</span>
                  <span>前端开发工程师</span>
                </div>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_school.svg')} alt="user" />
                  <span>毕业学校：</span>
                  <span>上海理工大学</span>
                </div>
              </div>
              <div className={Style.infoRow}>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_time.svg')} alt="user" />
                  <span>工作年限：</span>
                  <span>{dayJs().year() - 2017}年</span>
                </div>
                <div className={Style.item}>
                  <img src={require('../../assets/icon/icon_phone.svg')} alt="user" />
                  <span>电话：</span>
                  <span>15921848978</span>
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
          
        </main>

      </div>
    );
  }
}

export default AboutMe;

import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {    
    super(props);

    this.state = {
      num: 0
    }
  }
  componentWillReceiveProps = (nextProps) => {
    console.log(nextProps, 'nextProps');
    this.setState({
      num: nextProps.num
    });
  }

  sendStateToFather = () => {
    this.props.getPropsFromChild('I am child!');
  }  
  render() {
    const { num } = this.state;
    return (
      <div>
        num from father : {num}
        <br/>
        <button onClick={this.sendStateToFather}>发送state到父组件</button>
      </div>
    )
  }
}

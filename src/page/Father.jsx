import React, { Component } from 'react'

import Child from './Child.jsx'

export default class Father extends Component {
  constructor(props) {
    console.log('constructor');
    
    super(props);

    this.state = {
      fatherState: 0
    }
  }

  addNum = ()  => {
    const { fatherState } = this.state; 
    this.setState({
      fatherState: fatherState + 1
    });
    
  }

  getPropsFromChild = (str) => {
    console.log(str);
    
  }

  render() {
    const { fatherState } =  this.state;
    return (
      <div>
        fatherState: { fatherState }
        <br/>
        <button onClick={this.addNum}>state自增 1</button>
      </div>
    )
  }
}

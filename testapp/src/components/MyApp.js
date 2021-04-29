import React, { Component } from 'react';
import PropsExample from './PropsExample';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      count : 1
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.Name}</h1>
        <PropsExample Name={this.state.count}/>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count+1 })}>Increment</button>
      </div>
    )
  }
}
import React, { Component } from 'react';
import PropsExample from './PropsExample';
import './styles.css';
import natureImage from '../assets/images/nature.jpg';
import PropType from 'prop-types';

export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      count : 1
    }
  }

  static propTypes = {
    Name : PropType.string,
    cityArray: PropType.array
  }

  render() {
    this.props.HelloWorld()
    return (
      <div id="container">
        <img src={natureImage} alt="Nature Wallpaper" width="100%" height="100%"/>
        <br/>
        <h1>{this.props.Name}</h1>
        <PropsExample Name={this.state.count}/>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count+1 })}>Increment</button>
        <table style={{ color: "white", border: "1px solid"}} id="table">
          <thead>
            <tr>
            <th>Sr. No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
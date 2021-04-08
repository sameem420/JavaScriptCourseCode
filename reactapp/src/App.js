import logo from './assets/images/logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyApp from './components/MyApp';
import CounterApp from './components/CounterApp';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      Name : "Ali",
      Age: 25
    }
  }

  render() {
     return(
     <div className="App">
       <Navbar/>
       <Home />
      <MyApp Name={this.state.Name} Age={this.state.Age}/>
      <hr />
      <CounterApp />
     </div>
   )
}
}

export default App;

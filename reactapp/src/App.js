import logo from './assets/images/logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import MyApp from './components/MyApp';
import CounterApp from './components/CounterApp';
import React, {useState} from 'react';
import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);
  const handleClick = (incrementValue) => setCounter(counter + incrementValue); 
  return(
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter+200)}>+200</button>
      <Button onButtonClick={handleClick}  incrementValue={1} />
      <Button onButtonClick={handleClick} incrementValue={10} />
      <Button onButtonClick={handleClick} incrementValue={50} />
      <Button onButtonClick={handleClick} incrementValue={100} />
    </div>
  )
}
















// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       Name : "Ali",
//       Age: 25
//     }
//   }

//   render() {
//      return(
//      <div className="App">
//        <Navbar/>
//        <Home />
//       <MyApp Name={this.state.Name} Age={this.state.Age}/>
//       <hr />
//       <CounterApp />
//      </div>
//    )
// }
// }

export default App;

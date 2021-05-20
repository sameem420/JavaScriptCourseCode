// import logo from './assets/images/logo.svg';
import './App.css';
import Home from './components/Home';
// import Navbar from './components/Navbar';
// import MyApp from './components/MyApp';
// import CounterApp from './components/CounterApp';
import React, { useState, useEffect, createContext, useRef, useReducer } from 'react';
// import Button from './components/Button';

const Names = {
  name1: "Bilal",
}

function reducer(state, action) {
  switch (action.type) {
    case 'setNameHazaifa':
      return {name1: "Hazaifa"};
    case 'setNameSameem':
      return {name1: "Sameem"};
    default:
      return state;
  }
}

export const NameContext = createContext();

function App() {
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState('');
    const InputRef = useRef();
    const buttonRef = useRef();
    const [state, dispatch] = useReducer(reducer, Names);

  const handleSubmit = (event) => {
    event.preventDefault();
    // const userName = event.target.elements[0].value;
    const userName = InputRef.current.value;
    console.log(userName);
    setUserName(userName);
    InputRef.current.value = '';
    InputRef.current.focus();
  }

  const clickHandler = () => {
    console.log(buttonRef.current.click())
  } 

  useEffect(() => {
    fetch(`https://api.github.com/users/${userName}`).then(response => response.json()).then(data => {
      console.log(data);    
      const userProfile = [...userData,data];
      setUserData(userProfile); 
    })
    .catch(err => {
      console.log(err)
    });
  }, [userName]);

  return(
    <NameContext.Provider value={{state, dispatch}}>
      
    <div className="App">
      Name: {state.name1}
      <button onClick={() => dispatch({type: 'setNameHazaifa'})}>-</button>
      <Home />
      <h1>User Data :</h1>
      {userData.map((user, index) => {     
        return(
          <div key={index}>   
            <h1>{user.name}</h1>
            <h1>{user.location}</h1>
            <img src={user.avatar_url} alt={user.name} width="100" />
          </div>
          )
      })}
      <form onSubmit={handleSubmit}>
        <input placeholder="Enter your Github username" ref={InputRef} />
        <button ref={buttonRef}>Submit</button>
      </form>
      <button onClick={clickHandler}>This button will click Submit button</button>
    </div>
    </NameContext.Provider>
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

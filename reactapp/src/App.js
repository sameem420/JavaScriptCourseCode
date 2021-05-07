// import logo from './assets/images/logo.svg';
import './App.css';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import MyApp from './components/MyApp';
// import CounterApp from './components/CounterApp';
import React, { useState, useEffect } from 'react';
// import Button from './components/Button';


function App() {
    const [userData, setUserData] = useState([]);
    const [userName, setUserName] = useState('');
    // const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    setUserName(userName);
    // console.log(event.target.elements[0])
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/MHazaifa`).then(response => response.json()).then(data => {

      console.log(data);
      
      const userProfile = [...userData,data];
      // console.log("userProfile" , userProfile)
      setUserData(userProfile);
      // console.log("State Data",userData)
    })
    .catch(err => {
      console.log(err)
    })
    return () => {
      // Clean up the subscription
    };
  }, []);

  return(
    <div className="App">
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
        <input placeholder="Enter your Github username"/>
        <button>Submit</button>
      </form>
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

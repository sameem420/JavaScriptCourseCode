// import logo from './assets/images/logo.svg';
import './App.css';
// import Home from './components/Home';
// import Navbar from './components/Navbar';
// import MyApp from './components/MyApp';
// import CounterApp from './components/CounterApp';
import React from 'react';
// import Button from './components/Button';


function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting/> : <GuestGreeting/>
  // if (isLoggedIn) {
  //   return <UserGreeting />;
  // }
  // return <GuestGreeting />;
}

class App extends React.Component {
  constructor() {
    console.log("Constructor completed!")
    super()
    this.state = {
      userData : [],
      user: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    this.setState({
      user: userName
    })
    // console.log(event.target.elements[0])
  }

  componentDidMount() {
    console.log("Component Did Mount completed")
    fetch(`https://api.github.com/users/${user}`).then(response => response.json()).then(data => {
      // this.setState({ userData: Object.values(data) })
      const userProfile = [...this.state.userData, data];
      this.setState({userData : userProfile});
      // console.log("State Data",this.state.userData)
      // console.log("Fetch API Data",data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // componentWillUnmount() {
  //   this.state.userData = '';
  //   console.log("Component will unmount completed", this.state.userData)
  // }
  // const [counter, setCounter] = useState(0);
  // const handleClick = (incrementValue) => setCounter(counter + incrementValue); 
  render() {
  return(
    <div className="App">
      <Greeting isLoggedIn={true} />
      <h1>User Data :</h1>
      
      {this.state.userData.map((user, index) => {     
        return(
          <div key={index}>   
            <h1>{user.name}</h1>
            <h1>{user.location}</h1>
            <img src={user.avatar_url} alt={user.name} width="100" />
          </div>
          )
      })}
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Enter your Github username"/>
        <button>Submit</button>
      </form>
      {/* <h1>{counter}</h1>
      <button onClick={()=> setCounter(counter+200)}>+200</button>
      <Button onButtonClick={handleClick}  incrementValue={1} />
      <Button onButtonClick={handleClick} incrementValue={10} />
      <Button onButtonClick={handleClick} incrementValue={50} />
      <Button onButtonClick={handleClick} incrementValue={100} /> */}
    </div>
  )
}
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

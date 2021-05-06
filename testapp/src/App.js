import './App.css';
// import MyApp from './components/MyApp'
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentDidCatch(error, errorInfo) {
    // this.setState({ hasError: true})
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
      return this.state.isLoggedIn && <h1>Something went wrong.</h1>
  }
}


class App extends React.Component {
  constructor() {
    console.log("Constructor")
    super();
    this.state = {
      Name : "Ali"
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
    .then(resp => resp.json())
    .then(data => console.table(data.results))
    console.log("ComponentDidMount");
  }

  // static getDerivedStateFromProps(props, state) {
  //   return(
  //     console.log(state, props)
  //   )
  // }

  // componentWillUnmount() {
  //   console.log("ComponentWillUnmount");
  //   this.HelloWorld();
  // }

  // shouldComponentUpdate() {
  //   return (
  //     false
  //   )
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {

  //   return (
  //   console.log(prevState))
  //   }

  HelloWorld = () => console.log("Hello World!");

  render() {
    console.log("Rendering...");
  return (
    // <ErrorBoundary>
    <div className="App">
      <h1>Hello World</h1>
      <h2>jkajhjajkdwa</h2>
      <p>{new Date().toString()}</p>
      <h2>{this.state.Name}</h2>
      <button onKeyDown={() => this.setState({ Name: this.state.Name + true })}>Change Name</button>
      <ul>
        <li>awafaw</li>
      </ul>
      {/* <MyApp Name="Hazaifa" cityArray={[5,4]} HelloWorld={this.HelloWorld}  /> */}
    </div>
    // </ErrorBoundary>
  );
}
}


export default App;


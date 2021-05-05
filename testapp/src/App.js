import './App.css';
// import MyApp from './components/MyApp'
import React from 'react';

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

  static getDerivedStateFromProps(props, state) {
    return(
      console.log(state, props)
    )
  }

  componentWillUnmount() {
    console.log("ComponentWillUnmount");
    this.HelloWorld();
  }

  // shouldComponentUpdate() {
  //   return (
  //     false
  //   )
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    return (
    console.log(prevState))
    }

  HelloWorld = () => console.log("Hello World!");

  render() {
    console.log("Rendering...");
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>jkajhjajkdwa</h2>
      <p>{new Date().toString()}</p>

      <button onClick={() => this.setState({ Name: "Rohan" })}>Change Name</button>
      <ul>
        <li>awafaw</li>
      </ul>
      {/* <MyApp Name="Hazaifa" cityArray={[5,4]} HelloWorld={this.HelloWorld}  /> */}
    </div>
  );
}
}


export default App;


import Home from './Home';

const MyApp = (props) => {
    return (
      <div className="Appstyle">
        <h1>Hello, My Name is {props.Name}</h1>
        <h1>Hello, My Age is {props.Age}</h1>
        <Home Name={props.Name} />
      </div>
    );
  }

export default MyApp;
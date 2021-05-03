import './App.css';
import MyApp from './components/MyApp'

const App = () => {
  const HelloWorld = () => console.log("Hello World!")
  
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>jkajhjajkdwa</h2>
      <p>{new Date().toString()}</p>
      <ul>
        <li>awafaw</li>
      </ul>
      <MyApp Name="Hazaifa" cityArray={4} HelloWorld={HelloWorld} />
      {/* <MyApp Name="Ali" HelloWorld={HelloWorld} /> */}
    </div>
  );
}


export default App;


import Home from './Home';
import { useContext } from 'react';
import { NameContext } from '../App';

const MyApp = (props) => {
  const { state, dispatch } = useContext(NameContext);
    return (
      <div className="Appstyle">
        <h1>Name from MyApp Component : {state.name1}</h1>
        <button onClick={() => dispatch({type: 'setNameSameem'})}>+</button>
      </div>
    );
  }

export default MyApp;
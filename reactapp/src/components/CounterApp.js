import React, {useState} from 'react';

function CounterApp() {
    const [counter, setCounter] = useState(0)
    const [myName, setName] = useState("")
    const handleName = () => {
      setName( myName = "Zain")
    }

   return(
     <div className="App">
       <h2>{counter}</h2>
       <button onClick={() => setCounter(counter+1)}>Increment</button>
       <button onClick={() => setCounter(counter-1)}>Decrement</button>
       <h2>{myName}</h2>
       <button onClick={() => setName("Zain")}>Set Name</button>
     </div>
   ) 
   }

export default CounterApp;
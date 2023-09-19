
import './App.css'
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(5)

  const addCounter = () => {
    setCounter((prevCounter) => {
      return prevCounter + 1
    }); 
    setCounter((prevCounter) => {
      return prevCounter + 1
    }); 
    setCounter((prevCounter) => {
      return prevCounter + 1
    });
     setCounter((prevCounter) => {
      return prevCounter + 1
    });
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
  }

  const minusCounter = () => {
    setCounter(counter - 1)
  }


  // let counter =5;

  // const addValue = ()=>{
  //   console.log("value added ",Math.random())
  //   counter+=1
  // }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addCounter} disabled={counter >= 20}>Add value</button>
      <button onClick={minusCounter} disabled={counter <= 0}>Remove value</button>

    </>
  )
}

export default App

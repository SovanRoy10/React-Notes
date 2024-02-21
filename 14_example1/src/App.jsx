import { useEffect, useState } from "react";
import "./App.css";

function App() {
  console.log("App rendered", Math.random());
  // const [value, setValue] = useState(1);
  const [value, setValue] = useState({
    value: 0,
  });

  //const [multipliedValue, setMultipliedValue] = useState(1)
  //let multipliedValue = value * 5

  // const multiplybyfive = () => {
  //   //setMultipliedValue(value * 5)
  //   setValue(value + 1)
  // }

  const clickMe = () => {
    //setValue(multipliedValue);
    console.log("Logged"); // doesnot renderd
    // setValue(value + 1); // rendered
    // setValue(1); // doesnot render if the prev value is same
    setValue({
      value: 0,
    });
  };

  //useEffect(()=>{},[value.value])

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>Multiplied value: {multipliedValue} </h2> */}
    </>
  );
}

export default App;

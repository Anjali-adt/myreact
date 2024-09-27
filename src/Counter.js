import { useState } from "react";

function Counter() {
  let [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter>0){
      setCounter(counter - 1);
    }
    counter=0;
  };

  const reset=()=>{
    setCounter(0);
  }

  return (
    <>
    <div>
      <p>Counter: {counter}</p>
      <button style={{padding:"10px", marginRight:"10px", backgroundColor:"blue", color:"white"}} onClick={increment}>Increment</button>
      {/* <button style={{padding:"10px", marginRight:"10px", backgroundColor:"blue", color:"white"}} onClick={()=>{setCounter(counter+1)}}>Increment</button> */}

      <button style={{padding:"10px", marginRight:"10px",  backgroundColor:"blue",color:"white" }}  onClick={decrement}>Decrement</button>
      {/* <button style={{padding:"10px", marginRight:"10px",  backgroundColor:"blue",color:"white" }}  onClick={()=>{if(counter>0)setCounter(counter-1)}}>Decrement</button> */}

      <button style={{padding:"10px", marginRight:"10px", backgroundColor:"blue", color:"white"}} onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default Counter;

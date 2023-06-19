import { useState } from 'react'
import "./App.css"

function App ()
{
  const [ count, setCount ] = useState( 1 );

  console.log("component render  count=" + count + "");


  const increamentCount = () =>
  { 
    setCount( ( previousCount ) =>
    {
    console.log("increment render before  count=" + previousCount + "");
    return previousCount+1;
    } );
    
    console.log("increment render after set count=" + count + "");
  }

  const decreamentCount = () =>
  { 
   setCount( previousCount => previousCount - 1);
  }
  
  return (
    <div className="App">
      <button onClick={increamentCount}>+</button>
      <p>{ count }</p>
      <button onClick={decreamentCount}>-</button>
    </div>
  );
}

export default App;

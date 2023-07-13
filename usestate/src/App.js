import { useState } from 'react';
import "./App.css";
import ObjectState from './components/ObjectState';

function App ()
{
  const [ count, setCount ] = useState( 1 );

  console.log( "component render  count=" + count + "" );


  const increamentCount = () =>
  {
    setCount( ( previousCount ) =>
    {
      console.log( "increment render before  count=" + previousCount + "" );
      return previousCount + 1;
    } );

    console.log( "increment render after set count=" + count + "" );
  };

  const decreamentCount = () =>
  {
    setCount( previousCount => previousCount - 1 );
  };

  return (
    <div className="App">
      <div className="count-part">
        <button onClick={ increamentCount }>+</button>
        <p>{ count }</p>
        <button onClick={ decreamentCount }>-</button>
      </div>
      <div className="usestate-object">
        <ObjectState />
      </div>
    </div>
  );
}

export default App;

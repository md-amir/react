
import { useState, useEffect } from 'react'




function App ()
{

  const [ count, setcount ] = useState( 0 )
  const [name, setname] = useState("")

  useEffect( () =>
  {
    console.log("re run useEffect for all state. ");
    window.document.title = count;
  },[count] );



  return (
    <div className="App">
      <input type="text" value={ name } onChange={ (e) =>setname(e.target.value)}/>
      <button onClick={ () => { setcount( prev => prev + 1);} }>Count: {count}</button>
    </div>
  );
}

export default App;

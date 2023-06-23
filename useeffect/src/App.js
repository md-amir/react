import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from "react";

function App() {

  const [resoursType, setResoursType] = useState('Users')
  console.log('Component render');

  useEffect(() => {
    console.log('inside useEffect');
  
    return () => {
      console.log('clear useeffect');
    }
  },[resoursType])
  

  return (
    <>
    <button onClick={()=>setResoursType('Users')}>Users</button>
    <button onClick={()=>setResoursType('Post')}>Post</button>
    <button onClick={()=>setResoursType('Comments')}>Comments</button>
    <h1>{resoursType}</h1>
    </>
  );
}

export default App;

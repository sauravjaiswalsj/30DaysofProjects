import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ()=>{
  const [number,setNumber] = useState(0);
  const handlePositive = () =>{
    setNumber(number+1)
  };
  const handleNegative = () =>{
    setNumber(number-1);
  }
  return(
    <>
    <style type="text/css">
    {`
    .btn-flat {
      background-color: blue;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
  </style>

    <div className="App">
    <h1> Number Game</h1>
    <div className="App-body">
    <Button
      variant="flat"
      disabled ={number === 5}
      onClick={handlePositive}>+</Button>
    <span> {number} </span>
    <Button variant="flat" disabled = {number=== 0}onClick={handleNegative}>-</Button>
    </div> 
    </div>
    </>
  );
}

export default App;
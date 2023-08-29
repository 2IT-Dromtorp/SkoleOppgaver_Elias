import './App.css';
import { useState } from 'react';


export default function MyButton() {
  
  function HelloWorld() {
    // alert('hellowrld');
    setCount(count + 1);
  }
  
  const [count, setCount] = useState(0);

    return (
      <div>
        <h1>Welcome to my app</h1>
        <button className='button' onClick={HelloWorld}>Clicked {count} times</button>
      </div>
    );
  }
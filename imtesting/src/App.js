import './App.css';
import content from './conent';
import { useState } from 'react';

let Test ={
  name: "hello world ",
  age: 10
};


function App() {
  const [count, setCount] = useState(10);

  function handleClick() {
    setCount(count + 1);
  }
  const Data = "Name:" + Test.name + "age:"+ count;
  return (
    <div className="App">
      <div className='content_parent'>
        <div className='text-box'>
          <h1> {Data} </h1> 
          <br></br>
          <button onClick={handleClick}>button</button>
         {content()}
        </div>
      </div>
    </div>
  );
}

export default App;


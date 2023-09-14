import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './App.css';

export default function NedTelling() {
  const [endreTid, setEndreTid] = useState(10);
  let confetti = '';
  let myInterval;

  const handleChange = (e) => {
    setEndreTid(parseInt(e.target.value, 10));
  };

  useEffect(() => {
    if (endreTid > 0) {
      myInterval = setInterval(() => {
        setEndreTid((prevTid) => prevTid - 1); 
      }, 1000);
    }

    return () => {
      clearInterval(myInterval);
    };
  }, [endreTid]);

  useEffect(() => {
    if (endreTid === 0) {
      clearInterval(myInterval);
    }
  }, [endreTid]);

  if (endreTid === 0) {
    confetti = <ConfettiExplosion />;
  } 

  return (
    <div className='App'>
      <header className='App-header'>
        {endreTid}
        {confetti}
        <br></br>
        <input type="number" onChange={handleChange} value={endreTid} />
      </header>
    </div>
  );
}

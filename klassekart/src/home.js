import React, { useState, useEffect } from 'react';
import './App.css';
import Elev from './Elev';

export default function Home() {
  const [shuffledNames, setShuffledNames] = useState([]);
  const [isRandomized, setIsRandomized] = useState(false);

  useEffect(() => {
    const names = [
      "Andreas", "Ahmad", "Philip", "Gabriel", "Theodor",
      "Mattis", "Alva", "Silas", "Axel", "Vetle", "Kristoffer",
      "Johannes", "Elias", "Matheo"
    ];

    const shuffled = shuffleArray(names);
    setShuffledNames(shuffled);
  }, []);

  function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const toggleRandomizedOrder = () => {
    setIsRandomized(!isRandomized);
  };

  const displayNames = isRandomized ? shuffledNames : [
    "Andreas", "Ahmad", "Philip", "Gabriel", "Theodor",
    "Mattis", "Alva", "Silas", "Axel", "Vetle", "Kristoffer",
    "Johannes", "Elias", "Matheo"
  ];

  return (
    <div className="container">
      <div className='leftside'>
        <div className='box'>
          {displayNames.slice(0, 2).map((name, index) => (
            <div className='bakerste-rad' key={index}>
              <Elev name={name} />  
            </div>
          ))}
             {displayNames.slice(2, 3).map((name, index) => (
              <div className='midterste-rad' key={index}>
               <div className='sitteplasser'></div>
                <Elev name={name}/>
                <div className='philip-venn'>test</div>
               </div>
                ))}
                {displayNames.slice(3, 5).map((name, index) => (
                  <div className='forreste-rad' key={index}> 
            <div className='sitteplasser'> 
              <Elev name={name} />  
            </div> 
        </div>
        ))}
      </div>
    </div>
    <div className='rightside'>
        <div className='profilebox'>
          {displayNames.slice(5).map((name, index) => (
            <div className='sitteplasser' key={index}>
              <Elev name={name} />
            </div>
          ))}
        </div>
      </div>
    <button onClick={toggleRandomizedOrder}>
        {isRandomized ? 'Show Original Order' : 'Randomize Order'}
      </button>
  </div>
  );
}

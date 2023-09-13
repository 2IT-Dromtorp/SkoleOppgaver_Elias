import { useState } from 'react';

export default function OppNed() {
    
    const [count, setCount] = useState(0);

    function pilNed() {
        setCount(count - 1);
    };

    function pilOpp() {
        setCount(count + 1);
    };

    return (
        
        <div className='App'>
             <header className='App-header'>
                <button className='buttonOpp' onClick={pilOpp}>Opp</button>
                <h1>{count}</h1>
                <button className='buttonNed' onClick={pilNed}>Ned</button>
            </header>
        </div>

    );

}
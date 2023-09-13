import {useState, useEffect, ChangeEvent} from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './App.css'

export default function NedTelling() {
    
    let confetti = ''
    let inputText = ''
    let setInputText = ''


    let endreTid = [inputText, setInputText] = useState('');

    const handleChange = (e) => {
        setInputText(e.target.value);
    }
    
    if (endreTid != Number) { 
        return(null)
    }
    return(
        <div className='App'>
            <header className='App-header'>
                <input type="text" onChange={handleChange} value={inputText} />
            </header>
        </div>
    )
}
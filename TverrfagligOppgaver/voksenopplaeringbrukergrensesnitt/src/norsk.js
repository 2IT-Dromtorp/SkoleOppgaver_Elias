import './App.css';
import norsk from './bilder/books.png';
import { useContext } from 'react';
import {PopupContext} from './appBody.js';

export default function Norsk()  {
    const {1: showPopup} = useContext(PopupContext);
    return(
        <div className='Norsk'>
        <h1>Norsk</h1>
        <img src={norsk} alt='Bunke med bøker'></img>
        <button className='LesMer' onClick={() => {
            showPopup(true)
        }}>Les mer</button>
    </div>
    )
    
}
import './App.css';
import matOgHelse from './bilder/mat.jpg';
import { useContext } from 'react';
import {Penis} from './appBody.js';

export default function HeimKunnskap() {
    const {0: showPopup} = useContext(Penis);
    return (
        <div className="heimkunnskap">
                <h1>Heimkunnskap</h1>
                <img src={matOgHelse} className="App-logo" alt="Mat" />
                <button className='LesMer' onClick={() => {
            showPopup(true)
        }}>Les mer</button>
        </div>
    );
}
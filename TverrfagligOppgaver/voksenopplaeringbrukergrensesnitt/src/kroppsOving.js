import './App.css';
import kroppsOving from './bilder/Fussball.png';
import { useContext } from 'react';
import {Penis} from './appBody.js';

export default function KroppsOving() {
    const {0: showPopup} = useContext(Penis);
    return(
        <div className="kroppsOving">
            <h1>KroppsØving</h1>
            <img src={kroppsOving} className="Fotball" alt="Fotball" />
            <button className='LesMer' onClick={() => {
            showPopup(true)
        }}>Les mer</button>
        </div>
    )
}
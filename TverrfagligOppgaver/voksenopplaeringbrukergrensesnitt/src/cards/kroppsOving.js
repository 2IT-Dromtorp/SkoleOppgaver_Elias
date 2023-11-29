import '.././App.css';
import kroppsOving from '.././bilder/25777.svg';
import { useContext } from 'react';
import {PopupContext} from '../appBody.js';

export default function KroppsOving() {
    const {3: showPopup} = useContext(PopupContext);
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
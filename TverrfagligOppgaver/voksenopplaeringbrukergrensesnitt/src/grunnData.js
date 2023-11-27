import './App.css';
import data from './bilder/Data.jpg';
import {Penis} from './appBody.js';
import { useContext } from 'react';

export default function GrunnData() {
    const {0: showPopup} = useContext(Penis);
    return (
        <div className='GD'>
            <h1>Grunnleggende Datakunnskap</h1>
            <img className='Data' src={data} alt='Bildet av en datamaskin'></img>
            <button className='LesMer' onClick={() => {
            showPopup(true)
        }}>Les mer</button>
        </div>
    );
};
 
import '.././App.css';
import data from '.././bilder/2237420.svg';
import {PopupContext} from '../appBody.js';
import { useContext } from 'react';
import LesMer from '.././bilder/lesMer.png';


export default function GrunnData() {
    const {0: showPopup} = useContext(PopupContext);
    return (
        <div className='GD'>
            <h1>Grunnleggende Datakunnskap</h1>
            <img className='Data' src={data} alt='Bildet av en datamaskin'></img>
            <img className='lesMerIkon' src={LesMer} onClick={() => {
                showPopup(true)
            }}></img>
            {/* <button className='LesMer' onClick={() => {
            showPopup(true)
        }}>Les mer</button> */}
        </div>
    );
};
 
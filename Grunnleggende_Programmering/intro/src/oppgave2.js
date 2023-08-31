import './App.css';
import { useState} from 'react';
import ReactDOM from 'react-dom/client';

export default function Mattematikk() {

    return(
        <form>
            <label>
                Lengde:
                <input type="number"className='lengde'></input>
                <br></br>
                Bredde:
                <input type="number"className='bredde'></input>
            </label>
        </form>
    )
}


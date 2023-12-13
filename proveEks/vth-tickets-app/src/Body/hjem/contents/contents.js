import pilNed from '../../../Bilder/down-arrow-5.svg';
import './contents.css';
import { PilNedContext } from '../../../context.js';
import { useContext } from 'react';

export default function Contents() {

        const { PilNed, setPilNed } = useContext(PilNedContext)

        function changePilNed() {
                setPilNed('pilNed')
                console.log('idk')
        }

        return (
                <div className='contents'>
                        <input type='checkbox' id='done' name='doneCheckbox' value={'done'} className='doneCheckbox'/>
                        <label for='done'></label>
                        <div className='problemText'>
                                <h2> Lorem ipsum dolor sit amet consectetur adipiscing elit </h2>
                         </div>
                        <div className='dateText'>
                                <h3>DD.MM.YYYY</h3>
                        </div>
                        <div className='priorityText'>
                                <h4>Grad: Høy</h4>
                        </div>
                        <div className='merInfoPil' onClick={changePilNed}>
                                <img src={pilNed} alt="pilNed" className='pilNed'/>
                        </div>
                        <div className=''></div>
                </div>
        )
}
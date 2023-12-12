import './Body.css';
import CreateTicket from './CreateTicket/CreateTicket.js';
import Hjem from './hjem/Hjem.js';
import { useState, useContext } from 'react';
import { HjemContext, styleContext } from '../context.js';

export default function Body() {
    const { content, setContent } = useContext(HjemContext);
    const { style, setStyle } = useContext(styleContext);

    function HjemChange() {
        setContent(<Hjem />);
        setStyle("HjemElement");
        console.log('changed');
    }

    function CTicketChange() {
        setContent(<CreateTicket />);
        setStyle("CreateTicketElement");
    }

    return (
        <div className='body'>
            <div className='CreateTicket'>
                <button className='createButton' onClick={CTicketChange}>Create Ticket</button>
            </div>
            <div className={style}>
                <div className='changable-Element'>
                    {content}
                </div>
            </div>
        </div>
    )
}

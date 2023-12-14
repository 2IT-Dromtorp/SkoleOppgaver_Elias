import React from 'react'; // Import React to fix 'React' is not defined error
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

    // Define handleSubmit function here to fix 'handleSubmit' is not defined error
    function handleSubmit(event) {
        // Implementation of handleSubmit
        console.log('Form submitted', event);
    }

    return (
        <div className='body'>
            <div className='CreateTicket'>
                <button className='createButton' onClick={CTicketChange}>Create Ticket</button>
            </div>
            <div className={style}>
                <div className='changable-Element'>
                    {content && React.cloneElement(content, { onSubmit: handleSubmit })}
                </div>
            </div>
        </div>
    )
}


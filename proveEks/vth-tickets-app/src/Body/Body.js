import './Body.css'
import CreateTicket from './CreateTicket/CreateTicket.js';
import Hjem from './hjem/Hjem.js';
import { useState } from 'react';

export default function Body() {

    const [content, setContent] = useState(<Hjem />)

    function HjemChange() {
        setContent(<Hjem />);
        console.log('changed')
    }

    function CTicketChange() {
        setContent(<CreateTicket />);
    }

    return (
        <div className='body'>
            <div className='CreateTicket'>
                <button className='createButton' onClick={CTicketChange}>Create Ticket</button>
            </div>
            <div className='element-parent'>
                <div className='changable-Element'>
                    {content}
                </div>
            </div>
        </div>

        )
}
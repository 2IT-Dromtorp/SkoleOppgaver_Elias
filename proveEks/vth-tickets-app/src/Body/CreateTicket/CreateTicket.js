import React, { useContext, useState } from 'react';
import { TicketContext, HjemContext } from '../../context.js';
import './CreateTicket.css';
import Hjem from '../hjem/Hjem.js';

export default function CreateTicket({ onSubmit }) {
    const { addTicket } = useContext(TicketContext);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [severity, setSeverity] = useState('hoy');
    const [problem, setProblem] = useState('');
    const [details, setDetails] = useState('');
    const { content, setContent } = useContext(HjemContext);

    function HjemChange() {
        setContent(<Hjem />);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

        const newTicket = {
            email,
            name,
            date: formattedDate,
            severity,
            problem,
            details
        };

        addTicket(newTicket);
        onSubmit(newTicket);
        HjemChange();
    };

    return (
        <div className='createTicket'>
            <form className='createTicketForm' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:</label><br />
                <input type='email' id='email' required placeholder='Eksempel@eksempel.com' value={email} onChange={e => setEmail(e.target.value)} className='fiksBoks'/>
                <label htmlFor='navn'>Navn:</label><br />
                <input type='text' id='navn' placeholder='Fornavn, Etternavn' required autoComplete='off' value={name} onChange={e => setName(e.target.value)} className='fiksBoks'/>
                <label htmlFor='viktighet'>Alvorlighetsgrad:</label><br />
                <select id='viktighet' required value={severity} onChange={e => setSeverity(e.target.value)} className='fiksBoks'>
                    <option value='hoy'>Høy</option>
                    <option value='middels'>Middels</option>
                    <option value='lav'>Lav</option>
                </select>
                <label htmlFor='problem'>Problem:</label><br />
                <input type='text' id='problem' required autoComplete='off' placeholder='Forklar problemet kort.' value={problem} onChange={e => setProblem(e.target.value)} className='fiksBoks'/>
                <label htmlFor='detaljer'>Detaljer:</label><br />
                <textarea id='detaljer' required rows={10} cols={50} placeholder='Forklar problemet og hvordan det oppstod.' autoComplete='off' value={details} onChange={e => setDetails(e.target.value)} className='fiksBoks'/>
                <br />
                <input type='submit' value='Send'/>
            </form>
        </div>
    );
}


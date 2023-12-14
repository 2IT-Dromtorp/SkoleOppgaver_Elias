import React, { useContext, useEffect } from 'react';
import { PilNedContext, OpenedContentContext, TicketContext } from '../../../context.js';
import pilBilde from '../../../Bilder/down-arrow-5.svg';
import './contents.css';

export default function Contents() {
  const { pilNed, setPilNed } = useContext(PilNedContext);
  const { openedContent, setOpenedContent } = useContext(OpenedContentContext);
  const { tickets } = useContext(TicketContext);

  function toggleContent(ticketIndex) {
    setPilNed(prevPilNed => (prevPilNed === ticketIndex ? null : ticketIndex));
    setOpenedContent(prevOpenedContent => ({
      ...prevOpenedContent,
      [ticketIndex]: !prevOpenedContent[ticketIndex]
    }));
  }

  function getContentClassName(index) {
    const isOpened = openedContent[index] !== false;
    const isPilNed = pilNed === index;
    return `contents ${isOpened ? 'openedContent' : ''} ${isPilNed ? 'pilNed' : ''}`.trim();
  }

  useEffect(() => {
    const initialOpenedContent = tickets.reduce((acc, _, index) => ({
      ...acc,
      [index]: true,
    }), {});
    setOpenedContent(initialOpenedContent);
    setPilNed(0);
  }, [tickets, setOpenedContent, setPilNed]);

  return (
    <>
      {tickets.map((ticket, index) => (
        <div key={index} className={getContentClassName(index)}>
          <div className='contentwrapper'>
            <input type='checkbox' id={`done-${index}`} name={`doneCheckbox-${index}`} value={`done-${index}`} className='doneCheckbox' />
            <label htmlFor={`done-${index}`}></label>
            <div className='problemText'>
              <h2>{ticket.problem}</h2>
            </div>
            <div className='dateText'>
              <h3>{ticket.date}</h3>
            </div>
            <div className='priorityText'>
              <h4>Grad: {ticket.severity}</h4>
            </div>
            <div className='merInfoPil' onClick={() => toggleContent(index)}>
              <img src={pilBilde} alt="pilNed" className='pilBilde' />
            </div>
          </div>
          {openedContent[index] && ( 
            <div className='detaljerTekst'>
              <p>{ticket.details}</p>
            </div>
          )}
        </div>
      ))}
    </>
  );
}


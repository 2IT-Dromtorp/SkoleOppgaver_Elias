import './Navbar.css';
import { useState, useContext } from 'react';
import { HjemContext, styleContext } from '../context.js';
import Hjem from '../Body/hjem/Hjem.js';
// import logo from '../Bilder/logo.png';
import ticket from '../Bilder/ticket-icon.svg';

export default function NavBar() {

    const {content, setContent} = useContext(HjemContext)
    const { style, setStyle } = useContext(styleContext);

    function HjemChange() {
        setContent(<Hjem />);
        setStyle("HjemElement");
        console.log('changed')
    }

    return (
        <div className="navbar">
            <div className='logo'>
                <h3>VTH</h3>

            </div>
            <div className='links'>
                <div className='tickets' onClick={HjemChange}>
                    <img src={ticket} alt="tickets" />
                </div>
            </div>
        </div>
    );
}
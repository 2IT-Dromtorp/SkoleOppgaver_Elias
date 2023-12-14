import './Navbar.css';
import { useState, useContext } from 'react';
import { HjemContext, styleContext, InfoContext } from '../context.js';
import Hjem from '../Body/hjem/Hjem.js';
import Info from '../Body/Info/Info.js';
// import logo from '../Bilder/logo.png';
import ticket from '../Bilder/ticket-icon.svg';

export default function NavBar() {

    const {content, setContent} = useContext(HjemContext)
    const { style, setStyle } = useContext(styleContext);
    const { Info, setInfo } = useContext(InfoContext)


    function HjemChange() {
        setContent(<Hjem />);
        setStyle("HjemElement");
        console.log('changed')
    }

    function InfoChange() {
        setInfo(<Info />)
        console.log('')
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
                <div className='kontaktInfo' onClick={InfoChange}>
                    Info
                </div>
            </div>
        </div>
    );
}
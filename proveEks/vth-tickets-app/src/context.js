import React, { createContext, useState } from 'react';
import Hjem from './Body/hjem/Hjem.js'
 
const HjemContext = createContext({});
const HjemProvider = ({ children }) => {
    const [content, setContent] = useState([< Hjem />]);
    return (
        <HjemContext.Provider value={{content, setContent}}>
            {children}
        </HjemContext.Provider>
    );
};

const styleContext = createContext({});
const StyleProvider = ({ children }) => {
        const [style , setStyle] = useState(["HjemElement"]);
        return (
            <styleContext.Provider value={{style, setStyle}}>
                {children}
            </styleContext.Provider>
        )
}
 

const PilNedContext = createContext({});
const PilNedProvider = ({ children }) => {
    const [pilNed , setPilNed] = useState('idk');
    return (
        <PilNedContext.Provider value={{pilNed, setPilNed}}>
            {children}
        </PilNedContext.Provider>
    )
}

export { HjemContext, HjemProvider, styleContext, StyleProvider, PilNedContext, PilNedProvider };
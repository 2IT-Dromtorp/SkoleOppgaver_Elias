import React, { createContext, useState } from 'react';
import Hjem from './Body/hjem/Hjem.js';

const HjemContext = createContext({});
const HjemProvider = ({ children }) => {
    const [content, setContent] = useState(<Hjem />);
    return (
        <HjemContext.Provider value={{ content, setContent }}>
            {children}
        </HjemContext.Provider>
    );
};

const styleContext = createContext({});
const StyleProvider = ({ children }) => {
    const [style, setStyle] = useState("HjemElement");
    return (
        <styleContext.Provider value={{ style, setStyle }}>
            {children}
        </styleContext.Provider>
    );
};

const PilNedContext = createContext({});
const PilNedProvider = ({ children }) => {
    const [PilNed, setPilNed] = useState('ingenting');
    return (
        <PilNedContext.Provider value={{ PilNed, setPilNed }}>
            {children}
        </PilNedContext.Provider>
    );
};

const OpenedContentContext = createContext({});
const OpenedContentProvider = ({ children }) => {
    const [openedContent, setOpenedContent] = useState('contents');
    return (
        <OpenedContentContext.Provider value={{ openedContent, setOpenedContent }}>
            {children}
        </OpenedContentContext.Provider>
    );
};

const TicketContext = createContext({});
const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState([]);
    const addTicket = (newTicket) => {
        setTickets([...tickets, newTicket]);
    };
    return (
        <TicketContext.Provider value={{ tickets, setTickets, addTicket }}>
            {children}
        </TicketContext.Provider>
    );
};

const InfoContext = createContext({});
const InfoProvider = ({ children }) => {
    const [Info, setInfo] = useState('Info');
    return (
        <InfoContext.Provider value={{ Info, setInfo }}>
            {children}
        </InfoContext.Provider>
    );
};

export { HjemContext, HjemProvider, styleContext, StyleProvider, PilNedContext, PilNedProvider, OpenedContentContext, OpenedContentProvider, TicketContext, TicketProvider, InfoContext, InfoProvider };

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HjemProvider, StyleProvider, PilNedProvider } from './context.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HjemProvider>
    <StyleProvider>
      <PilNedProvider>
        <App />
      </PilNedProvider>
    </StyleProvider>
  </HjemProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

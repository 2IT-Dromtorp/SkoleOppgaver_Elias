import './App.css';
import AppBody from './appBody.js';
import Navbar from './navbar.js';
import Login from './login.js'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<AppBody/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

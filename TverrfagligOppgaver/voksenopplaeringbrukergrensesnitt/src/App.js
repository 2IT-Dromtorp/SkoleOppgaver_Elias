import './App.css';
import AppBody from './appBody.js';
import Navbar from './navbar.js';
import LoginRound from './loginRound.js'
import Signup from './Signup.js'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route index element={<AppBody/>}/>
      <Route path="/Login" element={<LoginRound/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;

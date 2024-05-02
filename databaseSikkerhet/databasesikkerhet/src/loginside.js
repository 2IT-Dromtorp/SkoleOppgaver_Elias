import React, { useState } from 'react';
import './loginside.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    fetch('/api/laerer', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) { 
          localStorage.setItem('accessToken', data.token); // Store the JWT token in local storage
          console.log(data);
          localStorage.setItem('rolle', data.user.laerer);
          window.location.href = '/loggedin';
        } else {
          alert(data.message);
          console.log(data.message);
        }
      });
  };

  return (
    <div className="login-container">
      <h2>Logg inn</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Brukernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Passord"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Logg inn</button>
      </form>
      <p>Har du ikke en konto? <Link to="/register">Registrer deg her</Link></p>
    </div>
  );
}

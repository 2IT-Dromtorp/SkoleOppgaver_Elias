
import React, { useState } from 'react';
import './loginside.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
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
        if (data.success) {
          localStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = '/';
          console.log(data.user);
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


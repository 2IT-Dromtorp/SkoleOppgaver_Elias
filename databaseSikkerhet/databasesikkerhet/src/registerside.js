import React, { useState } from "react";
import "./registerside.css";
import { Link } from "react-router-dom";
export default function RegisterSide() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordBekreftelse, setpasswordBekreftelse] = useState("");
  const [email, setEmail] = useState("");
  const [feilmelding, setFeilmelding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordBekreftelse) {
      setFeilmelding("Password og bekreftelse stemmer ikke overens");
      return;
    }

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }), //sender brukernavn, password og email til serveren
    })
  };

  return (
    <div className="register-container">
      <h2>Registrer deg</h2>
      {feilmelding && <p className="feilmelding">{feilmelding}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Brukernavn:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
        <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-bekreftelse">Bekreft password:</label>
          <input
            type="password"
            id="password-bekreftelse"
            value={passwordBekreftelse}
            onChange={(e) => setpasswordBekreftelse(e.target.value)}
          />
        </div>
        <button type="submit">Registrer</button>
      </form>
      <p>Har du allerede en bruker? <Link to="/">Klikk her</Link></p>
    </div>
  );
}


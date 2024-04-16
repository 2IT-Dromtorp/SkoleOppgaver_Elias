
export default function RegisterSide() {
  const [brukernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [passordBekreftelse, setPassordBekreftelse] = useState("");
  const [feilmelding, setFeilmelding] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (passord !== passordBekreftelse) {
      setFeilmelding("Passord og bekreftelse stemmer ikke overens");
      return;
    }

    // Gjør en POST-request til backend for å registrere brukeren

    // Etter vellykket registrering, kan du gå til innloggingsiden
    // Du kan bruke en routerbibliotek for dette, eller redirektere manuelt
  };

  return (
    <div className="register-container">
      <h2>Registrer deg</h2>
      {feilmelding && <p className="feilmelding">{feilmelding}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="brukernavn">Brukernavn:</label>
          <input
            type="text"
            id="brukernavn"
            value={brukernavn}
            onChange={(e) => setBrukernavn(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passord">Passord:</label>
          <input
            type="password"
            id="passord"
            value={passord}
            onChange={(e) => setPassord(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passord-bekreftelse">Bekreft passord:</label>
          <input
            type="password"
            id="passord-bekreftelse"
            value={passordBekreftelse}
            onChange={(e) => setPassordBekreftelse(e.target.value)}
          />
        </div>
        <button type="submit">Registrer</button>
      </form>
    </div>
  );
}


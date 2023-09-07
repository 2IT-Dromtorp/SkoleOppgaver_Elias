import logo from './logo.svg';
import './App.css';
import Oppgave1 from './oppgave1';
import Mattematikk from './oppgave2';
import Oppgave3 from './oppgave3';
import NumberGuesser from './oppgave4';
import DigitalClock from './digitalClock';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Oppgave1 /> */}
      {/* <Mattematikk /> */}
      {/* <TallGjett /> */}
      {/* <Oppgave3 /> */}
      {/* <NumberGuesser /> */}
      <DigitalClock />
      </header>
    </div>
  );
}

export default App;

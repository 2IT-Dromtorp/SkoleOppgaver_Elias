import './App.css';

let oppgave1a = 8;
let oppgave1b = "testverdi";
let oppgave1c = 2*3;
let oppgave1d = 2/3;


function A(){

    return(
        <div>
            <p>
                1a) Datatypen til oppgave 1a er {oppgave1a}
            </p>

        </div>
    );
}

function B() {

    return(
        <p>
            1b) Datatypen til oppgave 1b er {typeof(oppgave1b)}
        </p>
    );
}

function C() {

    return(
        <p>
            1c) Svaret til oppgave 1c er {oppgave1c}
        </p>
    );
}

function D() {

    return(
        <p>
            1d) Svaret til oppgave 1d er {oppgave1d}
        </p>
    );
}

console.log({oppgave1a}, {oppgave1b}, {oppgave1c}, {oppgave1d})


export default function Oppgave1() {
  return(
        <div className="tapp">
            <h2>Oppgave 1</h2>
            <A />
            <B />
            <C />
            <D />   
        </div>
  );
}
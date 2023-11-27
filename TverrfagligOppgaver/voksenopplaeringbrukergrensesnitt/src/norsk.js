import './App.css';
import norsk from './bilder/books.png';

export default function Norsk()  {
    return(
        <div className='Norsk'>
        <h1>Norsk</h1>
        <img src={norsk} alt='Bunke med bøker'></img>
        <button className='LesMer'>Les mer</button>
    </div>
    )
    
}
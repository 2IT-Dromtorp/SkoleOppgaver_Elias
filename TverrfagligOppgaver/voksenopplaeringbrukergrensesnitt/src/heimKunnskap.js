import './App.css';
import matOgHelse from './bilder/mat.jpg';

export default function HeimKunnskap() {
    return (
        <div className="heimkunnskap">
                <h1>Heimkunnskap</h1>
                <img src={matOgHelse} className="App-logo" alt="Mat" />
                <button className='LesMer'>Les mer</button>
        </div>
    );
}
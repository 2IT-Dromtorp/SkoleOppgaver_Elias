import './App.css';
import kroppsOving from './bilder/Fussball.png';

export default function KroppsOving() {
    return(
        <div className="kroppsOving">
            <h1>KroppsØving</h1>
            <img src={kroppsOving} className="Fotball" alt="Fotball" />
            <button className='LesMer'>Les mer</button>
        </div>
    )
}
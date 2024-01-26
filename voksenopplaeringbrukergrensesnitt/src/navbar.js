import './App.css';
import Skjold from './bilder/dromtorp-videregaende-skole.svg';
import { Link } from 'react-router-dom';

export default function Navbar() { 


    return(
    <div className="App-header">
    <div className='over-forelder'>
  <div className='hoyreluftboks'></div>
    <div className='overste-bar'>
    <p> AnsattPortal</p>
                <p>&nbsp;</p>
                <p>|</p>
                <p>&nbsp;</p>
                <p>Ledige Stillinger</p>
                <p>&nbsp;</p>
                <p>|</p>
                <p>&nbsp;</p>
                <p>Language/språk</p>
    </div>
    </div>
    <div className='info-forelder'>
        <div className='Logo-Boks'><Link to={"/"} className='Hundre-pros'><img src={Skjold} alt='Skjold'/></Link></div>
        <ul className='infolist'>
         <li>Utdanningstilbud</li>
          <li>For elever</li>
          <li>Om skolen</li>
          <li>Kontakt oss</li>
          {
          <Link to={"/login"} className='login'>
          <li>Logg inn</li>
          </Link>
          }
          <li>Søk</li>
        </ul>
    </div>
  </div>
)
}
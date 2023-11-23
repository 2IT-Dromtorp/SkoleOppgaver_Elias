import './App.css'

export default function Navbar() { 
    return(
    <div className="App-header">
    <div className='over-forelder'>
  <div className='hoyreluftboks'></div>
    <div className='overste-bar'>
    <p> AnsattPortal</p>
                <p>&nbsp;</p>
                <p>Ledige Stillinger</p>
                <p>&nbsp;</p>
                <p>Language/språk</p>
    </div>
    </div>
    <div className='info-forelder'>
        <ul className='infolist'>
         <li>Utdanningstilbud</li>
          <li>For elever</li>
          <li>Om skolen</li>
          <li>kontakt oss</li>
          <li>Logg inn</li>
          <li>Søk</li>
        </ul>
    </div>
  </div>
)
}
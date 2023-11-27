import './App.css'
import GrunnData from './grunnData'
import Norsk from './norsk'
import HeimKunnskap from './heimKunnskap'
import KroppsOving from './kroppsOving'
import Luft from './luft.js'
import bakgrunn from './bilder/nordre_follo_kommune_cover.jpg'
import { createContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Popup from './popUp.js';


export const Penis = createContext();
export default function AppBody() {
        const [isBox1PopupVisible, setIsBox1PopupVisible] = useState(false);
        const [isBox2PopupVisible, setIsBox2PopupVisible] = useState(false);
        const [isBox3PopupVisible, setIsBox3PopupVisible] = useState(false);
        const [isBox4PopupVisible, setIsBox4PopupVisible] = useState(false);
        const [isSignInPopupVisible, setIsSignInPopupVisible] = useState(false);
     
        const openSignInPopup = () => {
            setIsSignInPopupVisible(true);
        };
     
        const closeSignInPopup = () => {
            setIsSignInPopupVisible(false);
        };
     
        const openBox1Popup = () => {
            setIsBox1PopupVisible(true);
        };
     
        const openBox2Popup = () => {
            setIsBox2PopupVisible(true);
        };
     
        const openBox3Popup = () => {
            setIsBox3PopupVisible(true);
        };
     
        const openBox4Popup = () => {
            setIsBox4PopupVisible(true);
        };
     
        const closePopup = () => {
            setIsBox1PopupVisible(false);
            setIsBox2PopupVisible(false);
            setIsBox3PopupVisible(false);
            setIsBox4PopupVisible(false);
        };
        
    return (
     <div className='App-body'>
        <div className='background-image'></div>
        <div style={{zIndex: 69420}}>
    
                {isBox1PopupVisible && (
                    <Popup onClose={closePopup} content={
                        <div>
                            <h1>Grunlegende Data kunskap</h1>
                            <p>Dette grunnleggende datakunnskapskurset er skreddersydd for voksne i alderen 40 til 60 år og gir en introduksjon til digitale ferdigheter. Deltakerne lærer grunnleggende om datamaskinbruk, filbehandling, internett og e-post. Kurset fokuserer på å bygge tillit og kompetanse innenfor digitale verktøy, slik at deltakerne kan navigere i den moderne teknologiens verden. Med en pedagogisk tilnærming legger kurset til rette for en jevn læringsprosess og gir deltakerne nødvendige ferdigheter for å trives i dagens digitale samfunn.</p>
                           
                        </div>
                    } />
                )}
     
                {isBox2PopupVisible && (
                    <Popup onClose={closePopup} content={<div>
                        <h1>Norsk</h1>
                        <p>Dette norskkurset skreddersydd for voksne i alderen 40 til 60 år gir en engasjerende læringsopplevelse. Gjennom fokus på praktisk kommunikasjon og relevante temaer, hjelper kurset deltakerne med å styrke sine norskferdigheter for hverdagslige situasjoner. Med tilpassede undervisningsmetoder og kulturell innsikt legger kurset til rette for en positiv læringsprosess, og støtter deltakerne i å oppnå en dypere forståelse av det norske språket og samfunnet</p>
                        
                    </div>} />
                )}
     
                {isBox3PopupVisible && (
                    <Popup onClose={closePopup} content={<div>
                        <h1>Heimkunskap</h1>
                        <p>Dette heimkunskapskurset er skreddersydd for voksne i alderen 40 til 60 år og fokuserer på å utvikle essensielle ferdigheter for et velfungerende hjem. Gjennom praktiske øvelser lærer deltakerne matlaging, organisering og økonomisk husstell. Kurset tilbyr en balansert tilnærming til hverdagslivet, fremmer sunn matlaging og gir innsikt i hjemmets effektive drift. Med en kombinasjon av teori og praktisk anvendelse legger kurset grunnlaget for en forbedret livskvalitet gjennom økt kompetanse innen hjemmeøkonomi..</p>
                      
                    </div>} />
                )}
     
                {isBox4PopupVisible && (
                    <Popup onClose={closePopup} content={<div>
                        <h1>Kroppsøving</h1>
                        <p>Dette kroppsøvingskurset er skreddersydd for deltakere i alderen 40 til 60 år, og legger vekt på helsefremmende aktiviteter som er tilpasset modningen av kroppen. Gjennom varierte treningsformer, styrke- og kondisjonsøvelser, tilbyr kurset en inkluderende tilnærming til å fremme fysisk velvære og livsstilsendringer for en sunnere og aktiv alderdom.</p>

                    </div>} />
                )}
            </div>
        <div className='inner-body'>
            <Penis.Provider value={[setIsBox1PopupVisible, setIsBox2PopupVisible, setIsBox3PopupVisible, setIsBox4PopupVisible]}>
            <Luft />
            <GrunnData />
            <Luft />
            <Norsk />
            <Luft />
            <HeimKunnskap />
            <Luft />
            <KroppsOving />
            </Penis.Provider>
        </div>
     </div>
    )
}
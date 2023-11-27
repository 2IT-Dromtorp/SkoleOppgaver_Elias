import './App.css'
import GrunnData from './grunnData'
import Norsk from './norsk'
import HeimKunnskap from './heimKunnskap'
import KroppsOving from './kroppsOving'
import Luft from './luft.js'
import bakgrunn from './bilder/nordre_follo_kommune_cover.jpg'

export default function AppBody() {
    return (
     <div className='App-body'>
        <div className='background-image'></div>
        <div className='inner-body'>
            <Luft />
            <GrunnData />
            <Luft />
            <Norsk />
            <Luft />
            <HeimKunnskap />
            <Luft />
            <KroppsOving />
        </div>
     </div>
    )
}
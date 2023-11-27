import './App.css';
import data from './bilder/Data.jpg';

export default function GrunnData() {
    return (
        <div className='GD'>
            <h1>Grunnleggende Datakunnskap</h1>
            <img className='Data' src={data} alt='Bildet av en datamaskin'></img>
            <button className='LesMer'>Les mer</button>
        </div>
    );
};

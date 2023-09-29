import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const navigate = useNavigate();
    
    return (
        <>
            <div className='profile_container'>
                <div className='boks'>
                <h1> Dette er profilen til eleven </h1>
                <img src='./bilder/User-Profile-PNG-Image.png' alt='profile dummy'></img>
                <button onClick={() => navigate(-1)}> Tilbake til hovedmeny </button></div>
            </div>
        </>
    )
}
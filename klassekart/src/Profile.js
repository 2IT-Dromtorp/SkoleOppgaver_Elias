import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import json from './profiles.js';
import { useState, useEffect } from 'react';

export default function Profile() {

    const [userindex, setuserindex] = useState(null);
    const navigate = useNavigate();

    let profileParams = useParams();


    console.log("Profile from URL:", profileParams.profile);

    useEffect(() => {
        // Find the index of the matching profile
        const index = json.elever.findIndex(item => profileParams.profile === item.navn.toLowerCase());
        
        if (index !== -1) {
            // Profile found
            setuserindex(index);
        } else {
            // Profile not found
            setuserindex(null);
        }
    }, [profileParams.profile]);

    console.log(userindex)
    return (
        <>
            <div className='profile-container'>
                <div className='profile-box'>
                    <h1> Dette er profilen til {profileParams.profile} </h1>
                    {userindex !== null ? (
                        <>
                            <h4>Alder: {json.elever[userindex].alder} </h4>
                            <h4>Email: {json.elever[userindex].email} </h4>

                        </>
                    ) : (
                        <p>Profile not found</p>
                    )}
                    <button onClick={() => navigate(-1)}> Tilbake til hovedmeny </button>
                </div>
            </div>
        </>
    );
}
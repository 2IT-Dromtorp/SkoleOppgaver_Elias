import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function LoggedIn() {
    const [username, setUsername] = useState('');

    useEffect(()=>{
        async function checkToken(){
            const response = await fetch("/api/getname",{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
            if(response.status === 401) return window.location.href = "/";
            const data = await response.json();
            setUsername(data.name);
        }
        checkToken() 
    },[])

    return (
        <div className="loggedIn-container">
            <h1>Du er logget inn som {username} </h1> 
            <Link to="/utlaanTabell">Logg ut</Link>
        </div>
    );
}
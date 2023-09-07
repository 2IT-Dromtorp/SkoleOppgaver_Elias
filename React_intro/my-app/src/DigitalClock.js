import { useState, useEffect} from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

export default function DigitalClock() {

    let confetti = '' 
    let clock = new Date();
    let hh = clock.getHours();
    let mm = clock.getMinutes();
    let ss = clock.getSeconds();
    const[currentTime, newTime] = useState(new Date);

    console.log(clock)

    if (ss < 10) {
        ss = '0'+clock.getSeconds();
    };
    if (mm < 10) {
        mm = '0'+clock.getMinutes();
    }
    if (hh < 10) {
        hh = '0'+clock.getHours()
    }

    if (currentTime.getSeconds()===0) {
         confetti = <ConfettiExplosion />
    } else {
        confetti = null
    };

    let time = [hh+':' +mm+':' +ss];
    
    useEffect(() => {

        const myInterval = setInterval(() => {
        newTime(new Date)
        }, 500);

        return () => clearInterval(myInterval)

    }, []);

    return(
        <div className='App'>
            <header className='App-header'>
                
            <h1>{time}</h1>
                {confetti}
            </header>
        </div>
    )
}
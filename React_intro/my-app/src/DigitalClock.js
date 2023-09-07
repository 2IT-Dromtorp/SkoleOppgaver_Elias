import { useState, useEffect} from 'react';

export default function DigitalClock() {

    let clock = new Date();
    let hh = clock.getHours();
    let mm = clock.getMinutes();
    let ss = clock.getSeconds();
    let time = [hh+':' +mm+':' +ss];
    const[currentTime, newTime] = useState(new Date);

    console.log(clock)

    useEffect(() => {

        const myInterval = setInterval(() => {
        newTime(new Date)
        }, 1000);

        return () => clearInterval(myInterval)

    }, []);


    return(
        <div className='App'>
            <header className='App-header'>
                
            <h1>{time}</h1>

            </header>
        </div>
    )
}
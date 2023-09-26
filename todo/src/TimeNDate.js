
export default function TnD (){
    let TnD = new Date();
    let date = TnD.getDate();
    let month = TnD.getMonth();
    let weekDay = TnD.getDay();
    let weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let crythst = ['test', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st'];
    //jeg er lat... og det fungerer.

    let displayMonth = monthNames[month];
    let displayWeek = weekDayNames[weekDay];
    let displayth = crythst[date];

    console.log(crythst.length);
    console.log(date);
    console.log(monthNames[month]);
    console.log(weekDayNames[weekDay]);
     

    return(
        <h1>{displayWeek} {date}{displayth} {displayMonth}</h1>
    )
}


export default function TnD (){
    let TnD = new Date();
    let date = TnD.getDate();
    let month = TnD.getMonth();
    let weekDay = TnD.getDay();
    let weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    console.log(date)
    console.log(monthNames[month])
    
}
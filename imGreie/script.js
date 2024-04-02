function konvertering(){
    const gallon = 3.78541178;
    const ounces = 0.035274;
    const cups = 0.236588;
    const spiseskjeer = 0.0147868;
    // i liter
    
    const input = document.getElementById("input").value;
    const from = document.getElementById("from").value;
    //from == gallon, ounces... etc. 
    //input == hvor mange
    const output = from * input

    const change = output / from
    // endre html for å vise riktig verdier.

    
    const panildrom = input
    const endret = palindrom.split("").reverse().join("")
    if (palindrom == endret){
        console.log("palindrom")
        //skal endres på en p tag hvis det er riktig
    } else {
        console.log("ikke palindrom")
        //skal endres på en p tag hvis det er feil
    }
}
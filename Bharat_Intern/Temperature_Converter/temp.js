let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");

let cels = document.getElementById("cels");
let kelvin = document.getElementById("kelvin");

function celToFar(){
    let output = ( parseFloat(celsius.value) * 9/5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function farToCel(){
    let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}


function celToKel(){
    let output = parseFloat(cels.value) + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
}

function kelToCel(){
    let output = parseFloat(kelvin.value) - 273.15;
    cels.value = parseFloat( output.toFixed(2));
    console.log(output);
}
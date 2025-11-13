// temperature conversion programme in js

// lets define all our constant here 

const textBox = document.getElementById("textBox");
const tofahrenheit = document.getElementById("tofahrenheit");
const tocelsius = document.getElementById("tocelsius");
const Result = document.getElementById("Result");
let temp;


function convert(){

    if(tofahrenheit.checked){
        temp =Number(textBox.value) // typecasting the value into number
        temp = temp*9/5+32
        // Result.textContent = temp + "°F"
        // for precision you can use .toFixed(1)
        Result.textContent = temp.toFixed(1) + "°F"
        
    }
    else if(tocelsius.checked){
        temp =Number(textBox.value) // typecasting the value into number
        temp = (temp-32)+5/9
        // Result.textContent = temp + "°F"
        // for precision you can use .toFixed(1)
        Result.textContent = temp.toFixed(1) + "°C"
        

    }
    else{
        Result.textContent = "select a Unit";
    }

}
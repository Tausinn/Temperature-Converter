const celciusInput = document.getElementById("celcius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const kelvinInput = document.getElementById("kelvin-input");
const convertedValue1 = document.getElementById("convert-value1");
const convertedValue2 = document.getElementById("convert-value2");
const convertedValue3 = document.getElementById("convert-value3");

function kelvin1(){
    if(celciusInput.value === ""){
        alert("Please enter a temperature in celcius!")
    }
    let valueNum = parseInt(celciusInput.value)
    let value = (valueNum + 273.15) + "K";
    convertedValue1.innerText = value;
}


function fahrenheit1(){
    if(celciusInput.value === ""){
        alert("Please enter a temperature in celcius!")
    }
    let valueNum = parseInt(celciusInput.value)
    let value = ((valueNum * 9/5) + 32) + "F";
    
    convertedValue1.innerText = value;
}

function kelvin2(){
    if(fahrenheitInput.value === ""){
        alert("Please enter a temperature in fahrenheit!");
    }
    let valueNum = parseInt(fahrenheitInput.value);
    let value = ((valueNum - 32) * 5/9 + 273.15) + "K";
    convertedValue2.innerText = value;
     
}

function celcius1(){
    if(fahrenheitInput.value === ""){
        alert("Please enter a temperature in fahrenheit!");
    }
    let valueNum = parseInt(fahrenheitInput.value);
    let value = ((valueNum - 32) * 5 / 9) + "C";
    convertedValue2.innerText = value;
}

function fahrenheit2(){
    if(kelvinInput.value === ""){
        alert("Please enter a temperature in kelvin!");
    }
    let valueNum = parseInt(kelvinInput.value);
    let value =((valueNum - 273.15) * 9/5 + 32) + "F";
    convertedValue3.innerText = value;

}

function celcius2(){
    if(kelvinInput.value === ""){
        alert("Please enter a temperature in kelvin!");
    }
    let valueNum = parseInt(kelvinInput.value);
    let value = (valueNum - 273.15) + "C";
    convertedValue3.innerText = value;
}





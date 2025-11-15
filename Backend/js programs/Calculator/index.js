
const display = document.getElementById("display");

function appendToDisplay(char){
    display.value += char;
}
function clearDisplay(){
    display.value="";
}

// NOTE: executing js from string is far too easy , it is very easy for  any bas actor to run arbitarary code when we use eval

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
const val = document.getElementById("textBox").value;
const toF = document.getElementById("toFahrenheit");
const toC = document.getElementById("toCelcius");
const answer = document.getElementById("ans");
let ans
function clicked(){
    if(toF.checked){
        ans = (9/5) * val+32;
        answer.textContent = ans;
    }
    else if(toC.checked){
        ans = (val - 32) * 5/9;
        answer.textContent = ans;
    }
    else{
        answer.textContent="select a unit"
    }
}
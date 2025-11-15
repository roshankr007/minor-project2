let num = document.getElementById("countLabel").textContent;
num = Number(num);

const incbttn =document.getElementById("increase");
const decbttn =document.getElementById("decrease");
const resetbttn =document.getElementById("reset");
let count=document.getElementById("countLabel")

//increase count function 
incbttn.onclick = function (){
    num +=1;
    count.textContent = num;
}

//decrease count function
decbttn.onclick = function (){
    num -=1;
    if(num<0){
        num =0;
    }
    count.textContent = num;
}

//reset function 
resetbttn.onclick = function (){
    num =0;
    count.textContent = num;
}
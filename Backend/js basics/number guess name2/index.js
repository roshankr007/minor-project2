const text = document.getElementById("result");
const result = 3;
let tries =0;

function check(){   
     tries++;
     const num = document.getElementById("inputNo").value;

     if(num > 10 || num < 0) {
          text.textContent= "invalid selection";
          return;
     }
     else if(num < result) {
          text.textContent = "too low";
          return;
     }  
     else if(num > result){
           console.log("guess high ");
          text.textContent = "too high";
          return;
     }
     else if(num == result){
          text.textContent = "you got it !!";
          document.getElementById("btn").disabled = true;
          win();
          
          return;
     }
}
function win(){
     const noOfTry = document.createElement("p")
     noOfTry.textContent =`you won in ${tries}.`;
     document.getElementById("result").appendChild(noOfTry);
     noOfTry.style.color ="red";

     document.querySelector("body").style.backgroundColor= "green";
     const newButton = document.createElement("button");
     newButton.textContent = "Play again";
     document.getElementById("result").appendChild(newButton);
     newButton.onclick =  function(){
          location.reload();
     }
     
}
const min = 1;
const max = 10;
let input;

let num = Math.floor(Math.random()*(max-min +1 ))+min;
let attempts =0;
console.log(num);
while(true){
    input = window.prompt(`enter your value between ${min}-${max}`);
    attempts++;
   
    if(input===null){
        document.getElementById("display_attempts").textContent = `you exited the game.`
        break;
    }
    if(input<1){
        window.alert("enter a valid number");
    }
    if(input==num){
        alert("you won");
        attempts = Number(attempts);
        document.getElementById("display_attempts").textContent = `you took ${attempts} attempt.`
        break;
    }
    else if(input < num){
        alert("too low");
    }
    else if(input > num){
        alert("too high");
    }
}
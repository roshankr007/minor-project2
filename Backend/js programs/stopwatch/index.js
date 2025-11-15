
const display =  document.getElementById("display");
let timer = null;
let startTime =0;
let elapsedTime =0;
let isRunning= false;

function start(){
    if(!isRunning){
        startTime =Date.now() - elapsedTime;
        timer = setInterval(update,10);
        console.log(timer);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()- startTime;
        isRunning =false;
    }
}
function reset(){
    clearInterval(timer);
    let startTime =0;
    let elapsedTime =0;
    let isRunning= false;

    display.textContent="00:00:00:00";
}
//to update the screen
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // this is in ms 

    //converting this elapsed time to readable format 
    let hours = Math.floor(elapsedTime / (1000 * 10 * 60));
    let minutes   = Math.floor(elapsedTime/(1000 *60)%60);
    let seconds   = Math.floor(elapsedTime/ 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 /10);

    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");
    milliseconds = milliseconds.toString().padStart(2,"0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}   
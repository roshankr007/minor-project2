//setTimeout
// function hello(){
//     console.log("hello");
// }
// const timeId = setTimeout(hello,3000);


// clearTimeout(timeId); // clear the timeout function of the passed timeout id


//start timer

let timerId
function startTimer(){
    console.log("hea");
    timerId = setTimeout(()=> window.alert("hello"),3000);
}
function clearTimer(){
    clearTimeout(timerId);
}
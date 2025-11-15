//set time out function :
// setTimeout(()=> console.log("task 1 "),2000); //waits for 2 sec or 2000 ms
/*rest are printed before that so program doesn't need to wait for the execution of the setTimeout to 
complete and continues forward. when the function is complete task 1 is printed on the screen.

async -  are handled with CALLBACKS, ASYNC/AWAIT, PROMISES*/
// console.log("task 2");
// console.log("task 3");
// console.log("task 4");

//if i need to print task 1 before all the others

function func1(callback) {
    setTimeout(() => {
        console.log("task1");
        callback();
    }, 2000);
}
function func2() {
    console.log("task 2");
    console.log("task 3");
}
func1(func2);
/* functions which are executed synchronously are ok, 
problem arises with async functions  */

function task1(){
    setTimeout(()=>{
        console.log("task 1 done");
    },2000);
}

function task2(){
    setTimeout(()=>{
        console.log("task 2 done");
    },1000);
}

function task3(){
    setTimeout(()=>{
        console.log("task 3 done");
    },1500);
}

function task4(){
    setTimeout(()=>{
        console.log("task 4 done");
    },4000);
}

task1();
task2();
task3();
task4();
console.log("all tasks are done")
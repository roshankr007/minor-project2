// hello(goodbye);

// function hello(callback){
    
//     setTimeout(function(){callback()},3000);
//     console.log("hello");
//     console.log("hello");
    
//                                      //invokes the passed function in this line 
// }

// function leave(){
//     console.log("leave!");
// }
// function wait(){
//     console.log("wait!");
// }
// function goodbye(){
//     console.log("goodbye!");
// }

// sum(display,19,1);

// function sum(callback, x, y ){
//     let result = x+y;
//     callback(result);
// }
// function display(result){
//     console.log(result);
// }


//for each loop :

let numbers =[1,2,3,4,5];

// numbers.forEach(cube);
// numbers.forEach(display);

function cube(el,i,arr){
    arr[i] = Math.pow(el,3);
}

function display(el){
    console.log(el);
}


let fruits =["mango","apple","grape","berries"];

fruits.forEach(lowercase)
// fruits.forEach(display);

function display(el){
    console.log(el);
}
function uppercase(el,idx,arr){
    arr[idx]= el.toUpperCase();
}
function lowercase(el,idx,arr){
    arr[idx]= el.toLowerCase();
}


//NOTE: map method = similar to forEach but returns a new array after funtion completion 
const dates = ["2023-12-2","2024-11-12","2023-12-1","2022-1-14"];

const arr = dates.map(formatDates);
console.log(arr);
function rearrange(el){
    return  el.split("-").reverse().join("-");
}

function formatDates(el){
    // const temp =  el.split("-");
    return `${el.split("-")[1]}/${el.split("-")[2]}/${el.split("-")[0]}`
}
// user input 
/* 1) easy way - window prompt 
    2)by creating html text box */

// let username ;
// // username = window.prompt(`what's your username ?`);
// // console.log(username);
// document.getElementById("submit").onclick = func();

// function func(){
//     username  = document.getElementById("text").value;
//     document.getElementById("header").textContent = `Welcome ${username}`
// }

//type conversions 
// let z  ;
// z=Boolean(z);
// console.log(z);

// let x ="";
// x=Number(x);
// console.log(x); 

// using const variable 
        // const PI = 3.14159;
        // let radius, circum;
        // document.getElementById("submit").onclick = function (){
        //     radius = document.getElementById("text").value;
        //     radius = Number(radius);
        //     circum = 2* PI*radius;
        //     document.getElementById("circum").textContent = `circumference is ${circum}`
        // }



// random number generator 
    // Math.random()-> generates a random number between 0 and 1
    // Math.floor() -> rounds down to the nearest whole number
    // let rand = Math.floor(Math.random()*100)+1;
    // console.log(rand);

//  ternary operator - a shortcut to if and else statement 

// let age =19;
// let message =(age>=18)? `you are greater than 18`: `you are less than 18`;
// console.log(message);

let isStudent = true
let message2 = isStudent ? "you are a student ": "you are not a student";
// console.log(message2);

let name1 = "heelo world"
// console.log(name1.trim());
// console.log(name.trim().length);
// console.log(name1.endsWith("dd"))

let number = "623-239-283";
number = number.replaceAll("-2","MI");
// console.log(number)

let name2 = "roshan kumar"
let first = name2.slice(0,name2.indexOf(" "));
let last  = name2.slice(name2.indexOf(" ")+1);

// console.log(first);
// console.log(last);


// console.log(Math.floor(10/3))

// function f(...param){
//     return param.join(" ");
// }
// console.log(f("hi","hello","hey"));

//arrow functions

let num =[1,2,3,4];
const ans = num.map((el)=> {return Math.pow(el,2)});
// console.log(ans);


//to use arrow with filter 
// let ages =[12,13,14,18,90,76,55,45];
// const underAge = ages.filter((el)=>{ return el<18});
// console.log(underAge);

//arrow with reduce funtion 
let item =[13,42,12,54,64];
// console.log( item.reduce( (acc, el) =>  acc + el ))

class Product {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    display(){
        console.log(`Product: ${this.name}`)
        console.log(`Price: ${this.price}`)
    }
}

const p = new Product("choclate",10);
// console.log(p.display());
// p.display();

/*INHERITANCE*/

class Animal{
    isalive=true;
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} eats`)
    }
    sleep(){
        console.log(`${this.name} sleeps`)
    }
}
class Rabbit extends Animal{
    constructor (name){
        super(name);
    }
    eat(){
        super.eat();
    }
    // name="rabbit"
}
class R extends Rabbit{
    constructor(name){
        super(name);
    }
}
class Fish extends Animal{
    constructor (name){
        // this.name = name;
        // super()
        name="fish"
    }
}
//object creation
// const rabbit = new Rabbit("raabit");
// rabbit.eat();
// const r=new R("bunny");
// console.log(R.name);

//destructuring 
// const P1 = {
//     fname:"R",
//     lname:"K",
//     age:22,
//     job:"coder",
// }

// const P2 = {
//     fname:"P",
//     lname:"K",
//     age:24,
//     job:"cook",
// }
// const{fname,lname ,age, job="unemployed"} = P2;
// console.log(fname+" "+age+" "+job);


//array of objects

const fruits =[{name:"apple" , color:"red",cal:100 },
                {name:"banana",color:"yellow", cal:293 },
                {name:"mango", color:"yellow", cal:212 }];

//reduce method on fruits
// console.log(fruits[0].cal);
const maxCal = fruits.reduce((max, fruit) => 
                            fruit.cal > max.cal ? fruit : max
                        ).cal;
const minCal = fruits.reduce((min, fruit) => 
                fruit.cal < min.cal ? fruit : min
                ).cal;
// console.log(minCal);

/* DATES */
const date = new Date(4000000000000);
console.log(date);


//data as array 
const jsonnames= `["rk","patrick","john","rohit"]`
//data as object 
const jsonperson = `{"name":  "roshan","age":12,"isEmp" :true,"hobbies"  :["reading","writing","skiing"]}`

//data as array of objects 
const jsonpeople= `[{"name":  "roshan","age":12,"isEmp" :true},
              {"name":  "rohit","age": 63,"isEmp" :false},
              {"name":  "rishabh","age": 42,"isEmp" : true}]`


// const jsonString = JSON.stringify(names); 
// const personString = JSON.stringify(person);
// const peopleString = JSON.stringify(people);
// console.log(peopleString);
// console.log(people);

// using JSON.parse()  to convert a string into a JS object 
const names = JSON.parse(jsonnames);
console.log(names);
console.log(jsonnames);

const person = JSON.parse(jsonperson);
console.log(jsonperson);
console.log(person);

const people = JSON.parse(jsonpeople);
console.log(jsonpeople);
console.log(people);
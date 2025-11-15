// here we can write some re-useable code for other programs as welll

// to use this code else where , we need to define export before all the variables and function we tend to use 


/*// If we want to use Import then we have to create a package.json file in our folder by using npm init
// And within that package.json file we have to add "type" : "module" after "license": "ISC" for sure
// And while creating the package.json through command prompt we have to create select the main file carefully, because that will be the file from where 
// you are exporting it.

// package.json
{
  "name": "day30",
  "version": "1.0.0",
  "main": "Math.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Rishabh Srivastava",
  "license": "ISC",
  "type" : "module",
  "description": ""
}
  
ya to bhai live -server on karlo uspr index.html mei script link krte time type="module" kardena fir mast import , export game 
khelte raho.*/


export const PI = 3.14159 

export function getCircumference(radius){
    return 2*PI*radius;
}

export function getArea(radius){
    return PI*radius * radius;
}

export function getVolume(radius){
    return (4/3)* PI * radius * radius * radius;
}

// sum = ()=>{
//     console.log(2+2);
// }

// module.exports = 2+2;
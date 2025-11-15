// anything you need to import must be placed inside the curly brackets and hence performs object destructuring
import {PI,getCircumference,getArea,getVolume } from './MathUtil.js';
// we can now use these varibales and functions as a part of our program

console.log(PI);
console.log(getCircumference(2).toFixed(2));
console.log(getArea(2).toFixed(2));
console.log(getVolume(2).toFixed(2));
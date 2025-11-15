// dom navigation is process of nagivation of html document through js

const parent= document.getElementById("fruits");

// using this property we select an element and set it's color as yellow
// parent.style.backgroundColor ="yellow";

parent.firstElementChild.style.backgroundColor="orange"; // this highlights the first child within the parent element fruits

// to set each first child of list as yellow
const ulElements = document.querySelectorAll("ul"); // returns all the ul elements as an unordered list 
// eachFirstChild.forEach(child=>{
//     child.style.backgroundColor="green";
// })

const firstChildFruits = parent.firstElementChild;  //returns firts child of fruits
console.log(firstChildFruits);
    // firstChildFruits.style.backgroundColor="red";

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor ="yellow";
})

const nextElem = firstChildFruits.nextElementSibling
    nextElem.style.backgroundColor="green";

    //what if one tries to select the nextsibling but it doesn't exists
    const el =document.getElementById("banana");
    const next = el.nextElementSibling;     //returns null as on next sibling is there 
    // next.style.backgroundColor="aqua";


 firstChildFruits.parentElement.style.backgroundColor="aqua";   //fruits is colored as it is the parent elemnt of the firstChildFruits element
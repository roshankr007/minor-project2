const myBox = document.getElementById("myBox");


// function changecolor(event){
//     console.log(event);
//     change background color on event ( which is passed as an object here automatically)
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH 😒";
// }


// myBox.addEventListener("click",changecolor); //in the callback here we can also use arrow functions

//-------------using anonymous function-------------- :
// myBox.addEventListener("click",function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH 😒";
// })

//-------------using arrow function----------
myBox.addEventListener("click",(event)=>{ 
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH 😒";
});

myBox.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor="green";
    event.target.textContent="do not click me!!🤨"
})

myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="aqua";
    event.target.textContent=" click me😊";
})


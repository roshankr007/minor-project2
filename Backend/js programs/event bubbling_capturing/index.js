document.querySelector("#grandparent").
    addEventListener('click',()=>{
        console.log("grandparent clicked")
    },true);

document.querySelector("#parent").
    addEventListener('click',(e)=>{
        console.log("parent clicked")
        e.stopPropagation();            //this will stop the propagation at that step and will return 
    },true);

document.querySelector("#child").
    addEventListener('click',()=>{
        console.log("child clicked")
    },false);
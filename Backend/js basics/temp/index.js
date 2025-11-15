var pass ="1212";
function printuser(){
     let username = document.getElementById("inputBox").value;
     console.log(username);
     var newEle = document.createElement("p") 
     newEle.innerText = username;
     console.log(newEle.innerText);
     document.body.appendChild(newEle);
}
// const body = document.body;   //getting body
// const div = document.createElement("div");   //creating element
// div.innerText = "this text is written inside the div"; //setting the content of the element

// body.appendChild(div);// finally adding to dom 

console.log(pass);

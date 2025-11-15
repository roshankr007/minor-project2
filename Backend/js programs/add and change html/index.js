//create element
const newH1 = document.createElement("h1");

//step2 : ADD ATTRIBUTES/PROPERTIES
newH1.textContent ="My H1";
newH1.id="myH1";
newH1.style.color="tomato"      // this will set the font color as tomato color 
newH1.style.textAlign ="center";


//step 3: append elemnet to DOM
// document.body.append(newH1);        // this method appends our element to the last of the body(or the elemnent wehere we want it)

// document.body.prepend(newH1);   // this method appends our element at the top of the parent element

    document.getElementById("box1").append(newH1);      // now our element will be inside h1- it will become the last child of box1

    //step 4 remove html elements :
    document.getElementById("box1").removeChild(newH1);
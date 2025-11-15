//error is an object in js which is created and represents some problem with the code .
//handled through try catch block
//ex - divding by zero or string error

try{
    const a = Number(window.prompt("enter a number"));
    const b = Number(window.prompt("enter another  number"));

        if(b==0) {
            throw new Error("you can't divide by zero");
        }
        if(isNaN(b) || isNaN(a)) {
            throw new Error("you can't divide by a string");
        }
    const result = a/b;
}
catch(error) {
    console.error(error);
}
finally{
    console.log("end");
}
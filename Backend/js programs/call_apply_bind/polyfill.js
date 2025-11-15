let Name = {
    firstname:"roshan",
    lastname:"kumar"
}
//every function in js has access to bind() method
let printName = function(hometown, state) {
    console.log(this.firstname + " " +this.lastname + " "+hometown +" "+state);
}
let printmyName = printName.bind(Name,"mumbai"); 
printmyName("mahrashtra"); //invokes 

                                                                /*In polyfill -> our task is to write our own implementation of bind method
                                                                our mybind should be accessible to all the function of js so 
                                                                we put it in Function.prototype.mybind */

Function.prototype.mybind = function(...args){
    let obj = this ,                     // this points to printName method which will be called later 
        params = args.slice(1);         //removes the 1st elem and returns the rest
    return function(...args2){
        obj.apply(args[0],[...params, ...args2] );     /*here the params is again an array of parameters 
                                                        passed so we use apply() instead of call() method*/
    }
}

let printmyName2 = printName.mybind(Name,"mumbai"); 
printmyName2("Mahrashtra"); //invokes 

/* to concatenate 2 arrays - use ES6 syntax - [...arr1,...arr2] -> 
gives us the bigger array combining both arr1 and arr2*/
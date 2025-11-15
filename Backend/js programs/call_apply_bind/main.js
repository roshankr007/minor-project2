let Name={
    firstname:"roshan",
    lastname:"kumar",
    // printname: function(){
    //     console.log(this.firstname + " " + this.lastname);
    // }
}
// Name.printname();

printname = function(hometown){
    console.log(this.firstname + " " + this.lastname +" "+ hometown);
}

let Name2 ={
    firstname:"sachin",
    lastname:"tendulkar",
    /*suppose we want to print the name here also , we can copy it from 
    the first name object , but it is not a good way to do so 
     so we can do a function borrowing- we can borrow a function from another 
     object and use it with our data of other object*/

}

// take the function to call  and each and every object in js has access to 
// a special function called call(obj) with takes as an argument refernce to other object
// to point to

// Name.printname.call(Name2);     // function borrowing- this prints sachin tendulkar 

/* but generally method are not kept inside object body so we can 
directly call the call() method on method itself*/

printname.call(Name);   //prints roshan kumar as Name object is passed as a referenc to this method

//NOTE - the firts object is always the refernce to the object on which 
//method is called and rets arguments can come after that
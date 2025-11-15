const typed = document.getElementById("typed");
const body = document.getElementById("body");

document.addEventListener("keydown",KeyboardEvent=>{
    if(KeyboardEvent.code == 8){
        let str = typed.textContent;
        typed.textContent = str.substring(0,str.length-1);
        
        console.log(str);
    }
    //for alt, , , control
    else if(KeyboardEvent.code==18 || KeyboardEvent.code == 9 || KeyboardEvent.code==27 || KeyboardEvent.code==17){
        while(KeyboardEvent.code==18 || KeyboardEvent.code == 9 || KeyboardEvent.code==27 || KeyboardEvent.code==17){
            let str = typed.textContent;
            typed.textContent = str;
        }
    }
    // for new line
    else if(KeyboardEvent.key.startsWith("Enter")){
        // let str= typed.textContent;
        // str+="\n";
        // typed.textContent = str;
        console.log("inside break line ")
        var breakLine = document.createElement('br')
        document.typed.append(breakLine);
    }
    else if(KeyboardEvent.code==32){
        let str= typed.textContent;
        str+=" ";
        typed.textContent = str;
    }
    else{ 
        typed.textContent+=`${KeyboardEvent.key}`;
        // body.style.backgroundColor="lightblue";
        console.log(KeyboardEvent);
    }
})

document.addEventListener("keyup",(event)=>{
    // body.style.backgroundColor ="white";
})
const incLC = document.getElementById("incLC");
const incUC = document.getElementById("incUC");
const incNum = document.getElementById("incNum");
const incSpec = document.getElementById("incSpec");
const result = document.getElementById("pass");

document.getElementById("generate").onclick =  function(){
    let length =Number(document.getElementById("passLength").value);
    result.textContent =generate(length,incLC, incUC,incNum, incSpec);
}

//future implementation - a button to copy the generated password directly
//TODO: make button here

document.getElementById("copy").onclick = function() {
    const passwordText = result.textContent;
    const prefix = "Your password is: ";
    if (passwordText.startsWith(prefix)) {
        const password = passwordText.substring(prefix.length);
        navigator.clipboard.writeText(password).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    } else {
        alert('No password to copy!');
    }
};

 function generate(length, includeLC, includeUC,includeNum, includeSymb){
    const includeLowerCase = includeLC.checked ;
    const includeUpperCase = includeUC.checked ;
    const includeNumbers = includeNum.checked ;
    const includeSymbols = includeSymb.checked ;
    
    console.log(includeLC.checked);
    const LCchars ="abcdefghijklmnopqrstuvwxyz"
    const UCchars = LCchars.toUpperCase();
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-";

    let allowedChars = "";
    let password ="";

    allowedChars += includeLowerCase ? LCchars:"";
    allowedChars += includeUpperCase ? UCchars :"";
    allowedChars += includeNumbers ? numbers :"";
    allowedChars += includeSymbols ? symbols :"";
    console.log(allowedChars);

    const chars = allowedChars.split("");
    chars.sort(() => 0.5 - Math.random());
    allowedChars = chars.join("");

    console.log(allowedChars);

    if(length<=0){
        // document.getElementById("pass").textContent = "password length must be greater than 0."
        return "password length must be greater than 0."
    }
    if(allowedChars.length === 0 ) {
        // document.getElementById("pass").textContent = "At least 1 set of characters needs to be selected."
        return "At least 1 set of characters needs to be selected."
    }
    let random =0;
    for(let  i=0 ; i< length ; i++){
        random = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars.charAt(random);
    }
    console.log(password);
    // document.getElementById("pass").textContent = `your password is: ${password}`
    return `your password is:${password}`
 
}


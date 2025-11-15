const subbtn = document.getElementById("mychckbox")
const visabtn = document.getElementById("visabtn")
const masterbtn = document.getElementById("masterbtn")
const paybtn = document.getElementById("paypalbtn") 
const submitbtn = document.getElementById("submit")

const subresult = document.getElementById("subResult")
const payresult = document.getElementById("payResult")


submitbtn.onclick =function(){
    if(subbtn.checked){
        subresult.textContent = `you have subscribed`
        console.log(subresult.textContent)
        if(visabtn.checked){
            payresult.textContent=`paying via visa`
            console.log(paybtn.textContent)
        }
        else if(masterbtn.checked){
            payresult.textContent=`paying via master card`
        }
        else if(paybtn.checked){
            payresult.textContent=`paying via payPAL`
        }
        else{
            payresult.textContent=`please select a payment method`
        }
    }
    else{
        subresult.textContent = `you have not subscribed`
    }
}
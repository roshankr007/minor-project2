/*tasks to be done for this - 
1)in the drop down menu, we should get all the codes mentioned in codes.js. 
flag should change dynamically, and if a country is selected in the first drop down, it should not be available to be selected in
the other drop down.
2) the button should call the api and get the data.also converted amount should be visible.*/

let fromSelect = document.getElementById('from');
const toSelect = document.getElementById('toSelect');

for (country in countryList) {
     const newEle = document.createElement("option");
     newEle.innerText = country;
     fromSelect.appendChild(newEle);

     const newElem = document.createElement("option");
     newElem.innerText = country;
     toSelect.appendChild(newElem);
}
fromSelect.value = "USD";
toSelect.value = "INR";

const fromImg = document.querySelector('.select-container1').querySelector("img");
const toImg = document.querySelector('.select-container2').querySelector("img");

let fromCurr='USD', toCurr='INR';
fromSelect.addEventListener("change",(event)=>{
     const value = event.target.options[event.target.selectedIndex].innerText;
     fromCurr = value;
     fromImg.src = `https://flagsapi.com/${countryList[value]}/shiny/64.png`
     //enable all options
     for(option of toSelect.options){
          option.disabled = false;
     }
     const currDis =  toSelect.options[event.target.selectedIndex];
     currDis.disabled = true;

})

toSelect.addEventListener("change", (event)=>{
     const value = countryList[event.target.options[event.target.selectedIndex].innerText]
     toCurr = event.target.options[event.target.selectedIndex].innerText;
     toImg.src = `https://flagsapi.com/${value}/shiny/64.png`
     //enable all options
     for(option of fromSelect.options){
          option.disabled = false;
     }
     const currDis = fromSelect.options[event.target.selectedIndex];
     currDis.disabled = true;
})


// completing the funciton to get the price 
// const BASE_URL =
//   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies"

document.querySelector("button").addEventListener("click", async ()=>{
     let URL = `${BASE_URL}/${fromCurr.toLowerCase()}.json`
     const res = await fetch(URL);
     toCurr = toCurr.toLowerCase();
     fromCurr = fromCurr.toLowerCase();

     const data = await res.json();
     const rate = data[fromCurr][toCurr];

     const amt = Number(document.getElementById("amount").value);
     const finalrate = amt*rate;
     const msg = document.querySelector(".msg");
     msg.innerText = `${amt} ${fromCurr.toUpperCase()} = ${finalrate} ${toCurr.toUpperCase()}`
})


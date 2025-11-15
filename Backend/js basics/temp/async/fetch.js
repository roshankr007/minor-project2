// const URL = "https://dog.ceo/api/breeds/image/random";
const URL = "https://dogapi.dog/api/v2/breeds";
/*fetch provides an interface for fetching sending/receiving resources;
it uses request/response objects. The fetch method is used  to fetch a 
resource(data).*/

/**so bacially api calls work on ajax - aync js and xml , xml is just a way of writing bckedn
 * now json is used with async js to make api calls.
 * to parse the json object we use the json method.we give the json method, our object and it will return us our object.
 */
const para = document.querySelector("p");
const getData = async ()=>{
     console.log("getting data...");
     let result = await fetch(URL);     //api call 
     console.log(result);
     //parse json.
     let data = await result.json();
     // total 10 elements in array 
     console.log(data.data.length);
     let rand = Math.floor(Math.random()*10);

     // adding to para 
     para.innerText = data.data[rand].attributes.description;
};

// using promise chain to do the fetch= 
function getUsingPromise(){
     fetch(URL).then((res)=>{
          console.log(res);
          return res.json()
          // para.innerText = data.data[0].attributes.description;
     }).then((data)=>{
          console.log(data);
          para.innerText = data.data[0].attributes.description;
     }).catch((err)=>{
          console.error(err);
     })
}
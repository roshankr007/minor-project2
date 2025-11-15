

function getdata(data, getnextdata){
    return new Promise((res,rej)=>{
          setTimeout(()=>{
               console.log("data: ",data);
               res("suceess");
               // rej("fuck off");
          },2000);
    })
} 

// getdata(1, ()=>{
//     getdata(2); 
// })

// promises - it is like a promise to resolve or reject the said task, 

// const pr = new Promise((res, rej)=>{
//      console.log("this is a promise");
//      // rej("some error here ");
// })


// console.log(pr);
// console.log(pr.PromiseState);
// in promises, res , rej are two callbacks
// promises can have 3 states at any point-resolved, rejected, pending.

// using promises = 
/*
we have 2 functions - then() and catch()
if promise is fulfilled - we use then and if not then we use catch
promise.then((res)=>{
     success code
     })
promie.catch((err)=>{
     some error
     })

*/

const getPromise = ()=>{
     return new Promise((res, rej)=>{
          // console.log("i am a promise");
          // res("123");
          rej("maa chud gyi yar");
     })
}

// let promise=getPromise()
//      .then(()=>{
//           console.log("fulfilled");
//      })
//      .catch((err)=>{
//           console.log("some eror : ",err);
//      })

//promise chaining 
function asyncFunction1(){
     return new Promise((res, rej)=>{
          setTimeout(()=>{
               console.log(" data1 ");
               res("success");
               // rej("je to h gadbad");
          }, 3000);
     });
}
//promise -2
function asyncFunction2(){
     return new Promise((res, rej)=>{
          setTimeout(()=>{
               // console.log(" data2 ");
               // res("success");
               rej("ye h dusri gadbad");
          }, 3000);
     });
}

// console.log("Fetching data1....");
// let data1 = asyncFunction1().then((result)=>{
//      console.log("fetched data 1");
//      console.log("fetching data 2....");
//      let data2 = asyncFunction2().then((result)=>{
//           console.log("fetched data2");
//      }).catch((err)=>{
//           console.log("kuch gadbad hai daya: ", err);
//      })
// })
// .catch((err)=>{
//      console.log("data1 mei hai gadbad:", err);
// })
 

// another promise chainiing 
// getdata(1).then((res)=>{
//      getdata(2).then((res)=>{
//           getdata(3).then((res)=>{

//           })
//           .catch(()=>{
//                console.log("error");
//           })
//      })
//      .catch(()=>{
//                console.log("error");
//      })
// })
// .catch(()=>{
//                console.log("error");
// })

// another way to write this - 
// getdata(1)
//      .then((res)=>{
//           console.log(res);
//           return getdata(2);
//      })
//      .then((res)=>{
//           console.log(res);
//           return getdata(123);
//      })
//      .then((res)=>{
//           console.log(res);
//      })
//      //common catch method -
//      .catch((err)=>{
//           console.error("abe ma chud gayiiii ", err);
//      })
/*now, 
promise chaining is still not very efficient so we take it to the next level and use async await 
we can make any function asyncronous by using the keyword async in front of it 
a async function always returns a promise , 
await keyword pauses the execution pf its surrounding async function until the promise is settled.
await can be used inside async function only.
*/

function api(data){
     return new Promise((res,rej)=>{
          setTimeout(()=>{
               console.log("weather data: ", data);
               res(200); //means promise is resolved
          },2000);
     });
};
async function getWeatherData(){
     await api(1);//1st call
     await api(2);//2nd call
}
// getWeatherData();

/* 
now , there is still a problem with this async-await which is that normall callbackhell and other syntaxes will execute on 
it's own, but for async-await , we will have to write it inside a function and then call it. To escape this - we use IIFE or 
immediately invoked function expression- they are immediately defined as soon as they are created.
syntax - 
(function(){
     ...
})();

or -
(()=>{
     ...
     })();

or -
(async () => {
     ...})();

so writing above getWeatherData function as an iife-
*/

(async ()=>{
     await api(1);
     await api(2);
})();


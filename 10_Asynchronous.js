// async await >>  promise chains >>  callback hell  .

          //callback 

/*  A call back is a function passed as an argument to another function  */

function sum(a,b){
    // console.log(a+b);
}

function calculator(a,b,callBack){
    callBack(a,b);
}

calculator(1,2,sum);


const hello = () =>{
   // console.log("hello");
}

setTimeout(hello,3000);   //execute after 3 sec  callback .

 //      1.  callback Hell

 /* callBack hell : Nested callbacks stacked below one another forming a pyrmid structure(pyrmid Doom)
 This style of programming becomes difficult to understand and manage..        */

function getData(data ,getNextData){  //2s
     setTimeout(() =>{
      // console.log("data is",data);
      if(getNextData){
        getNextData();
      }
  }, 2000);
     }

// get data 1 with 2 sec delay
// get data 2 after occuring data 1 and again 2 sec delay
// get data 3 after occuring data  1 and 2 and 2 sec delay


        // (I)  callback Hell  

    //    getData(1 , getData(2));

getData(1, ()=>{
    getData(2, ()=>{
        getData(3 ,()=>{
            getData(4);
        });
    });
})

  //        2.  Promises
  /* promise is for "eventual" completion of task .
   It is an object in JS .
   It is a solution to callback hell      */

   // Three states in promise  
       //   1. pending   2.fullfilled    3.Rejected


   let promise = new Promise((resolve , reject)=>{
     //  console.log("Iam promise");

   })

/* 
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]] : "pending"
[[PromiseResult]] : undefined */

let promisee = new Promise((resolve , reject)=>{
   //  console.log("iam promisee resolver");
    resolve("success");
 })

/* 
Promise {<fulfilled>: 'success'}
[[Prototype]]:   Promise
[[PromiseState]]  : "fulfilled"
[[PromiseResult]]  : "success"        */

let promiseee = new Promise((resolve , reject)=>{
     // console.log("iam promisee rejector");
     // reject("Rejected");
 })

 //  error : Uncaught (in promise) Rejected .


 function getValue(value){
      return new Promise((resolve , reject) =>{
        setTimeout(()=>{
             // console.log("data",value);
            resolve("success");
        },5000);
      })
 }
 let Iampromise = getValue(5);
 console.log(Iampromise);

 //           How to use a Promises

 /*   .then()  and  .catch()   

   If a promise is fullfilled then  -- >  promise.then((res)=>{...}) 
   If a promise is rejected then   -->   promise.catch((err)=>{...})           */


const getpromise =()=>{
    return new Promise((resolve,reject)=>{
        // console.log("iam promise");
       resolve("success");
       reject("error");
    })
}
let prom = getpromise();

prom.then((res) =>{
     //  console.log("promise is fullfilled",res); //  promise is fullfilled success
})
prom.catch((err) =>{
   // console.log("promise is rejected ", err);  //promise is rejected error
})


      //  (II) promise chain

function async1(){
    return new Promise((resolve,reject) =>{
           setTimeout(()=>{
            console.log("data1");
            resolve("success data1");
           },5000);
    })
}
function async2(){
    return new Promise((resolve,reject) =>{
           setTimeout(()=>{
            console.log("data2");
            resolve("success data2");
           },2000);
    })
}

//promise chain
console.log("fetching data 1...");
async1().then((res)=>{
console.log(res);
    console.log("fetchind data 2...");
    async2().then((res)=>{
    console.log(res);
    })
})


function getDataa(dataa){  //2s
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
      console.log("data is",dataa);
      resolve("success");
 }, 8000);
    })
}

    //promise chain

    getDataa(1)
     .then((res)=>{
     console.log(res);
        return getDataa(2);
    }) .then((res)=>{
     console.log(res);
        return getDataa(3);
    }) .then((res)=>{
        console.log(res);
    })

    //        3.Async - Await

    /* async function always returns a promise .
           async function myFun(){.....}     
       awaits pauses the excecution of its surrounding async function.until the promises is settled .  */
     












  




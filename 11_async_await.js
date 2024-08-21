    //        3.Async - Await

    /* async function always returns a promise .
           async function myFun(){.....}     
       awaits pauses the excecution of its surrounding async function.until the promises is settled .  */

       function api(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
             // console.log("whether data");
             resolve(200);
            },2000)
        });
       } 
    
    async function getData() {
        await api();  //1st
        await api();  //2nd
    }
     // console.log(getData());
     
     // async - await

function getData(data){
return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("data is :",data);
        resolve("success");
    },3000)
});
}

async function getAllData() {
    console.log("getting data 1.....")
     await getData(1);
     console.log("getting data 2.....")
     await getData(2);
     console.log("getting data 3.....")
     await getData(3);
     console.log("getting data 4.....")
     await getData(4);
     console.log("getting data 5.....")
     await getData(5);
}
//console.log(getAllData());

//         IIFE (Immediately Invoked Function Expression)
/*  IIFE is a function that is called immediately as soon as defined.  */

(async function getAllData() {
    console.log("getting data 1.....")
     await getData(1);
     console.log("getting data 2.....")
     await getData(2);
     console.log("getting data 3.....")
     await getData(3);
     console.log("getting data 4.....")
     await getData(4);
     console.log("getting data 5.....")
     await getData(5);
})();


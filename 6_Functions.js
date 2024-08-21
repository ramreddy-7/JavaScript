/*Function is a block of code that performs  a specific task . Functions can be invoked whenever needed.
   
1. define a function

function functionName() {
    / do some work  -->block of code                 
} 
    
2 .call the function

  functionName();  */
  
  /*  Function Parameters : They are  Like local varaibles  of functions. 
                            -> and they are live in the  block of scope 
  
             Ex : function sum (x,y){
            / local variables -> scope
              s = x+y;
             console. log(x);         -> it prints x value when you passed parameter
             return s;   }

  */
function myfunctioon(){                             //-> non parametrized function
    console.log("iam learning js :) ")
}

myfunctioon();

function myfunction(msg){                          // -> parmeterized function
      console.log(msg);
}

myfunction("iam learning js :) (: ")             //-> Argument passing in parameter

// function sum of 2 numbers

function sum(x,y){

    s = x + y;
    return s;
}
 value = sum(2,5)
console.log(value);

/* Arrow Functions --> compact (small) way of writing functions 

const function name = (param1 , param2) => { 
    / do somework           
           }                         */
let arrowSum = (a,b) =>{
     console.log(a+b);
}

console.log(arrowSum);   
  /* ->       (a,b) => {
    console.log(a+b);  
      }  */

arrowSum(3,4)          // 7

//for each loop

// arr.forEach(callBackFunction)

//callBackFunction : it is a function to execute for each element in an array

// A call Back is a function passed as an argument to another function.

/* arr.forEach(val)=>{
    console.llog(val)
    }    */

    let arr =[1,2,3,4,5,6,7];

    arr.forEach(function printVal(val){
        console.log(val);
    });
     // or
    arr.forEach((val) => {
        console.log(val.toString());
    })
    
    // for each loop consists of 3 parameters foreach(value,index,arrayitself)
    
    let kids =["john","rock","pelvin","sam"];
       kids.forEach((val,idx,kids) =>{
        console.log(val.toUpperCase(),idx,kids);
       })
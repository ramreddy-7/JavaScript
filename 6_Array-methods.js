//More imp array methods
  
// 1.Map method

/* Creates a new array with the results of some operation.The value its callback
   returns are used to form a new array */ 

   let array = [2,4,6];

   let newArray = array.map ((val) =>{
                return val * val;
   })

  
   console.log(array);        //-> [2,4,6]
   console.log(newArray);     // -> [4,16,36]

// 2.Filter method

/* Create a new array of elements that give true for a condition/filter  */

let arr = [1,2,3,4,5,6,7,8,9,10];

let evenArray = arr.filter((val) =>{
    return val % 2 == 0;
})

console.log(evenArray);      //-> [2,4,6,8,10]

// 3.Reduce mrthod

/* perform some operations and reduces the array to a single value. It returns that single value */

let arra =[1,2,3,4];

let currArr = arra.reduce((result , current)  => {
             return result + current
})

console.log(currArr);  //10

/*  this method perform by taking 2 parameters first paramater takes result of first 2 
operations and store that result into a single parameter that into a first parameter and
second paramater is  current value . 

At the end result obtain as single value . */

// 1. print Largest number from an array

let A = [1,34,5,67,8,9,88,87,5,6,2];
   let maxNum =  A.reduce((prev,curr) =>{
      return prev>curr ?  prev:curr ;
   })

// 2 .we are given array of marks of students . filter out the marks of students that scored 90+

let marks = [67,78,98,87,67,55,70,99,93];
 let pro = marks.filter((val) =>{
      return  val>90 ;
 })
 console.log(pro);

 // 3. Take a number n as input . Create an array of numbers from 1 to n .
 //     use the reduce method to calaculate sum of numbers in the array.
 //     use the reduce method to calaculate product of numbers in the array.

 let n = prompt("enter a number n");

 let arrr = [];
 for(let i=1; i<=n;i++){
    arrr[i-1] = i;
 }
 console.log(arrr);

 let sum = arrr.reduce((prev,curr) =>{
     return prev + curr ;
 })

 let product = arrr.reduce((prev,curr) =>{
    return prev * curr ;
})

console.log(sum);
console.log(product);
/* 1. Create a function using function keyword that takes a string as an argument  returns the
    number of vowels in that string           */

function countVowels(str){
    count = 0;
    for(let i =0; i<str.length ; i++){
      if(str[i]=="a" || str[i] == "e" || str[i] == "i" || str[i]=="o" || str[i]=="u"){
          count++;
      }
    }
    console.log(count);
}
countVowels("ramredddy");        //2

// 2.create an arrow function to perfom the same task


let countVoweels = (str)=>{
    count = 0;
    for(let i =0; i<str.length ; i++){
      if(str[i]=="a" || str[i] == "e" || str[i] == "i" || str[i]=="o" || str[i]=="u"){
          count++;
      }
    }
    console.log(count);
}
countVowels("ramredddy");        

// 3. For a given array of numbers, print the square of each value using for each loop

let array =[2,4,5,6,7,8,9,10];
    array.forEach( (val) =>{
      console.log(val*val);
    })

//for-of Loop   . Use for Arrays and Strings

let str = "RAM REDDY"  
let size=0;
for(let i of str){   //iterator -->   characters
    console.log("I = " ,i);
    size++;
}
console.log("size of string is "+size);  //9


// for-in Loop . Use for objects and arrays

let student ={
    name : "Ram",
    Age : 19,
    gpa:9.2
};

for(let i in student){
    console.log("I = ",i , "value =", student[i]);
}

//All even numbers from 1 - 100;

for(let num=1;num<=100;num ++) {
   if(num % 2==0){
        console.log("num :", num);
    }
}

//guessing correct number;

guess_number = 25
number = prompt("Guess the correct number");
while(number!=guess_number){
    number =  prompt("You entered wrong number . Guess the correct number");
}
console.log("you entered correct number");
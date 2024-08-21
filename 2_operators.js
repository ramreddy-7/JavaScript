let a =7;
let b =2;

//Arthimetic Opeartors
console.log("a = ",a, "b =",b);
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a % b = ", a%b);

//Assignment Operators

a = a++ ;// a = a+1
b+= 4 ; // a = a+4
a **= 4; // a =  7*7*7*7 (7 power 4)



console.log(a);
console.log(b);

// comparison operators 

let c = 5;
let d = 5 ;


console.log(c==d); // True . here c is compate with d if it is equal then it returns true else false
console.log(c!=d); // False.

let r = 5;
let e ="5";

console.log(r==e); // True . it can convert first string to number then compare."5" -> 5 (implicit conversion)
console.log(r===e);// False . it can compare directly string "5" 

// Logical Operators

let x = 2;
let y = 3;
cond1 = (x < y) ; //True 
cond2 = x ==2;  //True
cond3 = ( x > y) //False

console.log(cond1 && cond2); //True . if the both the conditions are true then only true in AND opeator
console.log(cond1 && cond3); //False.

console.log(cond1 || cond3); //True . if one condition is true from both the conditions it becomes true in OR operator
console.log(!(x > y)) // True . Actually it is false but here we using not(!) operator so it becomes true
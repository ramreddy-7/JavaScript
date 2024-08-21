// Strings is a sequence of characters used to represent text .
// Strings are Immutable . It wouldn't change just it returns new string

let obj ={
    item : "Pen",
    price: 7 
};

console.log("The cost of" , obj.item , "is", obj.price);

console.log(`The cost of ${obj.item} is ${obj.price}`); 
 // template literals --> to create strings by doing substitution of placeholders (`&{}`) 

 console.log(`the value is ${1+2+3}`);  //6

 // /n /t --> escape characters  /n -> next line /t -> tab space 

 let str = "RAM\tREDDY" // RAM  REDDY
 let stn = "RAM\nREDDY" // RAM
                        // REDDY
console.log(str.length);  //9        


let string = "ram reddy"
/*1*/ newString = string.toUpperCase();
console.log(string);     // "ram reddy"  -> Orginal string
console.log(newString);  // "RAM REDDY" 

/*2*/ let spaces = string.trim() //"ram reddy"  -> remove white spaces staring and ending not in middle 
    console.log(spaces);

/*3*/ let part =  string.slice(1,7);    // am red  -> return part of the string
    console.log(part);
let s = "sai"
let r = "ram"

/*4*/  let name = s.concat(r);  // "sairam -> joins string 2 with string 1 
     console.log(name);


let m = "ramreddy"

/*5*/ let i = m.replace("y","i");
      console.log(i);

/*6*/ m.charAt(2);            // m




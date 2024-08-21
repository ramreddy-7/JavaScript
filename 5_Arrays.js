// Array is an collection of similar items . array is an object type

// Arrays are Mutuable .

let marks =[10,20,30,7,70];
console.log(marks);
console.log(marks.length);  // 5 property

let heroes = ["thar", "iron man", "spider man", "hulk", "superman","flash","batman","aquaman"];
console.log(heroes);  

for(let hero =0; hero<heroes.length; hero++ ){
    console.log(heroes[hero].toUpperCase());
}
for(let hero of heroes ){
    console.log(hero);
}

//Average marks

let markss =[85,97,44,37,76,60];
let sum=0;
let avg =0;
for(let i =0;i<markss.length; i++){
      sum = sum+ markss[i]  
}
console.log(sum);

avg = sum/markss.length;
console.log(avg);

/*Array Methods
     push(): add to end
     pop(): delete from end and return.
     toString() : converts array to String.
     concat() : join multiple arrays & returns the result
     unshift() : add to start
     shift() : delete from start and retuurn.
     slice(starting index , ending index): returns a piece of array
     splice() : change original array(add, remove, replace)
*/

let food_items = ["pizza","burger","bread","kabeer","strawberry","papaya"];
console.log(food_items);

console.log(food_items.toString());

//push
food_items.push("cream","bun");
console.log(food_items);                   // pizza,burger,bread,kabeer,strawberry,papaya,cream,bun

//pop
deleted_item = food_items.pop();
console.log("deleted item is", deleted_item );  // deleted_item : bun

//to string
let mars =[100,90,88,86];
mars = mars.toString();
console.log(mars);                    // '100,90,88,86'

//concat()
let marvel_heroes = ["iron man", "spider man", "captian america"];
let dc_heroes = ["bat man", "superman"];

let heros = marvel_heroes.concat(dc_heroes);
    console.log(heros);                 // -> iron man, spider man , capitan america , batman , superman

//unshift   
let movies = ["kgf", "bahubali","rrr"];
 movies.unshift("pushpa");
  console.log(movies);                   // -> pushpa , kgf , bahubali , rrr

//shift
movies.shift()
console.log(movies);                     // -> kgf , bahubali , rrr

let moviees = ["kgf", "bahubali","rrr","pushpa","kantara","hanuman"];
//slice
console.log(moviees.slice(1,4));         // -> bahubali , rrr , pushpa
//splice
console.log(moviees.splice(2,3,"alluarjun","ram charan")); 
console.log(moviees);  // --> kgf , bahubali , alluarjun , ram charan , hanuman .

//splice - add
let movieees = ["kgf", "bahubali","rrr","pushpa","kantara","hanuman"];
moviees.splice(2,0,"red"); //-> kgf , bahubali , red , rrr , pushpa , kanatara , hanuman

//splice - delete
let movieeees = ["kgf", "bahubali","rrr","pushpa","kantara","hanuman"];
movieeees.splice(2,3) // --> kgf , bahubli , hanuman.. which maeans from index 2 . 3 elements would be deleted

//splice - replace
let movieeeees = ["kgf", "bahubali","rrr","pushpa","kantara","hanuman"];
movieeeees.splice(2,1,"sai");  // kgf , bahubali , sai , pushpa , kanatara , hanuman


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
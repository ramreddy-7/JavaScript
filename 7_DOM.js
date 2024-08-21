// DOM --->  When a web page is loaded, the browser creates a Document Object Model (DOM) of the page.

               // (I)  DOM manipulations (Accesing the elements)

//Selecting By Id

let myId= document.getElementById("one");
console.dir(myId);

//Selecting by class
let myClass = document.getElementsByClassName("header");
console.dir(myClass);

//Selecting with tag

let myTag = document.getElementsByTagName("button");
console.dir(myTag);

 //Querey Selector

 // document.querySelector("myId / myClass / tag ")

let firstEL = document.querySelector("p")     //return first element of paragraph tag
console.log(firstEL);

let firsttEL = document.querySelector(".header")     //return first element of header tag
console.log(firsttEL);

let firstttEL = document.querySelector("#one")     //return first element of header tag
console.log(firstttEL);

// document.querySelectorALL("myId / myClass / tag ")

let allEL = document.querySelectorAll("p")     //returns Node List -> all elements of paragraph tag
console.log(allEL);


let alllEL = document.querySelectorAll(".header")     //returns Node List -> all element of header class
console.log(alllEL);




          //    (II)  DOM properties (Changes)

// 1 . tagName : returns tag for element nodes

console.log(firstEL.tagName);     // p
        
// 2 . innerText : returns the text content of the element and all its children . 

let divvv = document.querySelector(".box");  
console.log(divvv.innerText);

/* THIS IS A DOM DOCUMENT
DOM: Document object Model

This is a paragraph

This is another para

SUBMIT */

// 3. innerHTML : returns the plain text or HTML contents in the element

let divv = document.querySelector(".box");  
console.log(divv.innerHTML);

/*        <h1 class="header"> THIS IS A DOM DOCUMENT </h1>
        <h2 class="header">DOM: Document object Model </h2>
        <p id="one">This is a paragraph</p>
        <p id="two"> This is another para</p>
        <button>SUBMIT</button>   */

// 4 . textContent : same like innerText but it returns textual content even for hidden elements 

          //DOM ATTRIBUTES

 /* 1.   .getAttribute(attr)  --> to get the attribute value..   */

 let div = document.querySelector("div");

 console.log(div);

 let value = div.getAttribute("class");
 console.log(value);

 let namee = document.querySelector("p");

 let name = namee.getAttribute("name");
 console.log(name);

 let header = document.querySelector("h1");
 console.log(header.getAttribute("class"));

 /*     .setAttribute(attr , value) --> to set the attribute value..   */

 let headeer = document.querySelector("h1");
 console.log(headeer.setAttribute("class","newClass"));


 //  style  ->  node.style

 let nod = document.querySelector(".box2");
 nod.style.backgroundColor = "yellow";
 nod.style.textAlign = "center";
 nod.style.color = "black";

 //   (III)  Insert Elements   1 - create  2-add/Insert

    /*  let el = document.createElement("div");
               node.append(el);  */
  let element = document.createElement("button");
  element.innerText = "click me";
  console.log(element);

  div.append(element);   // --> Adds at the end of node (inside)
//   div.prepend(element); // -- > Adds at the start of node(inside)
//   div.before(element);  // -- > Adds before the node ..
//   div.after(element);    // --> Adds After the node ..

//   div.remove(element);   // -> removes the node.
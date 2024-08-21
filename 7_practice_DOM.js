/*create a h2 element with text "hello javascript " and .append from Apna clg studetns to this
text using js */

heading = document.querySelector("h2");

console.dir(heading.innerText);

heading.innerText = heading.innerText + " FROM APNA COLLEGE STUDENTS"


/* create 3 divs with common class name "box" . Access them and add some unique text
 to each of them   */

let box = document.querySelectorAll(".box");

console.dir(box[0]);
console.dir(box[1]);
console.dir(box[2]);

box[0].innerText = "RAM";
box[1].innerText = "SAI";
box[2].innerText = "SAIRAM";

/* create a new Button element.Give it a text "click me" , background color of red and text color of white
          Insert the button as the first element inside the body tag */

let body = document.querySelector("body");
let element = document.createElement("button");
element.style.backgroundColor = "red";
element.style.color = "white"
element.innerText = "click me"
body.prepend(element);

/* create a paragraph tag in html , give it a class and some styling
     now create a new class in css and append this class to the <p> element    */
let tag = document.querySelector("p");

//tag.setAttribute("class", "newPara");

tag.classList.add("class","newPara");


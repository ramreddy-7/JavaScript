/* let b = document.querySelector("#button");

let curr_mode = "light";

b.addEventListener("click", ()=>{
    if(curr_mode == "light"){
        curr_mode = "dark";
document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        curr_mode = "light"
        document.querySelector("body").style.backgroundColor = "white";
    console.log(curr_mode);

}
})   */

// by using classList

let button = document.querySelector("#button");
let body = document.querySelector("body");
let curr_mode = "light";
button.addEventListener("click",()=>{
    if(curr_mode== "light"){
        curr_mode= "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        curr_mode= "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(curr_mode);
})
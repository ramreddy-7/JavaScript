/*   The change in the state of an object is Known as Event ..
    Events are fired to notify code of "intresting changes " that may affect code execution.
    
     . Mouse events(click,doubleclick , etc..)
     . keybord events(keypress,keyup,keydown)
     . Form events(submit, etc..)
     . print event and many more    */

  //   node.event =() =>{
       // handle here     }

let button = document.querySelector("button");
button.onclick = () =>{
    let a = 6
    a++;
    console.log(a);
    console.log("Hello here");
}

let div = document.querySelector(".box");
div.onmouseover = () =>{
    let b =7
    b++;
    console.log(b);
}

                //Event Object

/* It is a special object that has details about the event .
   All event handlers have access to the event object's properties and methods */

   // node.event = (e) =>{
      // handle here }  e.target , e.type , e.clientX , e.clientY
    
      let divv = document.querySelector(".box");
      divv.onmouseover = (e) =>{
      console.log(e);
      console.log(e.type);                   // mouseover
      console.log(e.target);             // <div class ="box">BOX</div>
      console.log(e.clientX);            // 106
      console.log(e.clientY);            // 102
      }

              //Event Listners

/*     node.addEventListner (event,callback)
       remove.addEventListner (event,callback)
       Note : the callback refernce should be same to remove */


let buttoon = document.querySelector("#buton");
buttoon.addEventListener("click" , ()=>{
     let a = 7;
    console.log(a);
})
buttoon.addEventListener("click" , ()=>{
    let a = 8;
   console.log(a);
})
const removal = ()=>{
    let a = 9;
   console.log(a);
}
buttoon.addEventListener("click" ,removal);

buttoon.addEventListener("click" , ()=>{
    let a = 10;
   console.log(a);
})
buttoon.removeEventListener("click",removal);
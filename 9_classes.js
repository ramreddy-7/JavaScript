//                     1.        object .


 // javascript object is an entity having state and behaviour (properties and method).
 //js objects have special property called prototype

const Student  = {                  //object 
    name : "Ram Reddy",
    Age : 19,
    marks : 98,
    addMarks1 : () =>{
             console.log("marks is", this.marks);
    },        //function
    addMarks2 () {
        console.log("marks is", this.marks); //function
}
}

//proto type    __proto__       it is a refernce of object.
  
const employee ={                             //object
    calcTax(){
        console.log("calculate tax is 1000 ");       
    }
}
    const ram_reddy1= {          //if object and prototype have same method , objects method will be used.
        calcTax(){
            console.log("calculate tax is 2000 ");
        }
    };
    const ram_reddy2= {
        salary : 10000000,
    };
    const ram_reddy3= {
        salary : 1000000,
    };

ram_reddy1.__proto__ = employee ;  // setting employee prototype to ram_reddy. which means ramreddy
 // object can access employee function calctax by using prototype.

 ram_reddy1.__proto__ = employee ;   //prototype
 ram_reddy2.__proto__ = employee ;
 ram_reddy3.__proto__ = employee;
 
 
 
 
 //          2.       classes                            

 /*  class is a program-code template (blue print) for creating objects .
   Those objects will have some state(variables) and some behaviour(functions) inside it  */

   class Toyato{
          start(){
            console.log("start the car");
          }
          drive(){
            console.log("drive the car ")
          }
          stop(){
            console.log("stop the car");
          }
          setBrand(brand){
             this.brandName = brand; 
          }

   }

   let fortuner = new Toyato();
   fortuner.brandName = ("fortuner brand");
   let cruiser = new Toyato();


    //     3.       constructor  

    /* constructor in js  automatically invoked by new   */

    
   class suziki{
         constructor(brand,milege){
            console.log("creating new object");
            this.brandi = brand;
            this.milegi = milege;
         }
    start(){
      console.log("start the car");
    }
    drive(){
      console.log("drive the car ")
    }
   }

let swift = new suziki("swift",25);   //constructor called and automatically printed  when we create a new object.
console.log(swift);
console.log(swift.start());
/*creating new object
suziki{
     brandi: "swift" 
     milegi: 25 }
     [[Prototype]]: Object
start the car */ 
let fronx = new suziki("fronx",23);  // constructor called and automatically printed 
console.log(fronx);
/*creating new object
suziki
      brandi: "fronx"
      milegi: 23
      [[Prototype]] : Object */


    //               4.    Inheritance  

/* Inheritance is passing down properties and methods from parent class to child class */

/* If child and parent have same method then child methods will be used.[method overriding]. */

class person {

    eat(){
        console.log("eat");
    }
    sleep(){
           console.log("sleep");
    }
    work(){
        console.log("work");
    }
}
class doctor extends person{
   work(){
    console.log("surgery");
   }
}
class engineer extends person{
    work(){
        console.log("construction");
    }
}

let ramreddyy = new engineer();
console.log(ramreddyy);                 //engineer      [[Prototype]]  : person
console.log(ramreddyy.sleep());   // sleep
console.log(ramreddyy.eat());     //eat
console.log(ramreddyy.work());  //construction


//     5. super keyword

/*  The super keyword is used to call the constructor of its parent class to access the parent 
     properties and methods   */


class personn {

    constructor(){
        console.log("enter parent constructor");  //2
        this.species = "homo sapiens"
    }

    eat(){
        console.log("eat");
    }
    sleep(){
           console.log("sleep");
    }
}
class doctoor extends personn{
      constructor(branch){
        console.log("enter child constructor");  //1
        super();
        this.branch = branch;
        super.eat();
        console.log("exit child processor");
      }
   }

let ram = new doctoor("cse");

console.log(ram);

/* enter child constructor
   enter parent constructor
   exit child constructor

  - doctoor
branch: "cse"
species: "homo sapiens"
[[Prototype]]: person      */
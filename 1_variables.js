/* Variable = Variable is a container thst stores a value 

    2 steps to create a  variable
    step 1: declartion
              let x
    step 2: assignmnet
              x =100;     */

 let x;
 x =100;
 console.log(x);

 let y = 200;
 console.log(y);

 let age = 19;
 let name ="ram reddy";
 isFollow = true;
 let i =null;
 let r ;

 console.log(typeof age);
 console.log(typeof name);
 console.log(typeof isFollow);
 console.log(typeof i);
 console.log(typeof r);
 console.log(`The age is ${age} years`);
 console.log(`The name is ${name}`);

//{  }  Blocks .by using blocks we can re use the  variables .

{
    let age = 20;
    console.log(age);
}
const a =20;  //constant value we cannot change or modified the value of constant.

/* Object
object is a collection of values

key : value

example student is a object

name   -- string     
rollno -- int                   values
address -- string
*/

const student ={
    name:"ramreddy",
    age:29,
    cgpa:9.2,
    ispass:true
};
console.log(student);
console.log(student.age); //29
console.log(student.cgpa);//9.2
console.log(student["age"]);

student.cgpa = student.cgpa + 1 ;        
console.log(student.cgpa); //10.2
student.name = "saireddy";             //we can change key values for constant in an object 
console.log(student.name);             //but we cannot change key values in constant

// const name = ram;
        //name = sai;                    //not possible
       
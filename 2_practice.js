let number = prompt("Enter a Nmber");
if(number % 5 === 0){
    console.log( number ," is Multiple of 5");
}
else{
    console.log(number ,"is not Multiple of 5");
}


let score = prompt("enter your score(0-100)");
 let Grade;


if(score <=100 && score >=80){
    Grade = "A"
}
else if(score <=89 && score >=70){
    Grade  ="B"
}
else if(score <=69 && score >=60){
    Grade = "C"
}
else if(score <=69 && score >=60){
    Grade  = "D"
}
else if(score <=59 && score >=50){
    Grade = "E"
}
else if(score <=49 && score >=0){
    Grade = "F"
}
else{
    console.log("Grade Not avialable");
}

console.log( "Grade is ", Grade);
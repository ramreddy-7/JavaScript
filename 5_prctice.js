/*    For a given price of 5 items ->[250,645,300,900,50]
All items have an offer 10% off them. change the array to store final price after
applying an offer         */

let array = [250,645,300,900,50];

 for(let i=0; i<array.length;i++){
   console.log(`values of items : ${array[i]}`);
   let offer = array[i]/10;
   array[i] = array[i] - offer;
   console.log(`After applying 10% offer on items : ${array[i]}`);
 }


 /* create an array to store companies - bloomberg , microsoft , uber  , google , ibm , netflix
    a. remove the first company from an array
    b. remove uber and add ola in its place
    c. add amazon at the end      */

let companies = ["Bloomberg", "Microsoft","uber", "Google","IBM", "Netflix"];

  companies.shift();  // -> "Microsoft","uber", "Google","IBM", "Netflix"

  companies.splice(1,1,"ola");

  companies.push("Amazon");

  console.log(companies);
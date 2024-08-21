// fetch API  (Application programming Interface)

/*  The Fetch API provides an interface for fetching(sending/recieving)  resources .
  It uses Request and Response objects. 
  The fetch() method is used to fetch a resource (data) . 
  
   let promises =  fetch(url,[options])         */

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")

// .then (response => response.json())  // .json() converts json code into object .
// .then (data => console.log(data.name))
// .catch(error => console.log(error))


const url = "https://pokeapi.co/api/v2/pokemon/pikachu"

const getFacts = async () =>{
  console.log("getting data.....");
  let response = await fetch(url);
  console.log(response);  // JSON format

  let data = response.json() ; // converting json format into object
  console.log(data);
}
console.log(getFacts());


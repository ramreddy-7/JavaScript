const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdown select ");


for(let select of dropdowns){
    for(code in countryList){
    let newOption = document.createElement("option");
    newOption.innerText = code;
    //newOption.value = code;

    if(select.name =="from" && code=="USD"){
        newOption.selected = "selected";
    }
    else if(select.name =="to" && code=="INR") {
      newOption.selected = "selected";
        }
    select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
          updateFlag(evt.target);
    })

   const updateFlag = (element)=>{
       console.log(element);
   }
}
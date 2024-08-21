let data = "secret"

class user{

    constructor( name , email , id){
        this.name = name;
        this.email = email;
        this.id = id ;
    }

    viewData(){
        console.log("Data is ", data)
    }
    
} 

class student extends user{
    constructor(name, email , id){
        super(name, email , id);
    }
    updateAddress(){
        console.log("updating Address");
    }
}

class teacher extends user{
    updateAttendence(){
        console.log("updating attendence");
    }
}

class Admin extends user{

    editData(){
        data = " 123";
        console.log(data);
    }
}

let ram = new student("ramreddy","ramreddy2424" ,588);
let madhu = new teacher("madhu", "madhu24",701);
let admin = new Admin();

console.log(ram);
console.log(ram.viewData());
console.log(ram.updateAddress());
console.log(madhu);
console.log(madhu.viewData());
console.log(madhu.updateAttendence());
console.log(admin);
console.log(admin.editData());
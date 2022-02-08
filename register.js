let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
function displayAllPetsNames(){
    alert(`You have ${salon.pets.lenght} pets.`);
    for(let i=0; i<salon.pets.lenght;i++){
        console.log(salon.pets[i]);
    }
}
//constructors
function Pet(name,age,gender,breed,service,owner,contact){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.owner=owner;
    this.contact=contact;
}

//object
let Lola=new Pet("Lola", 12, "Female","Dachshund","Nails","Maira Quinones", 999-999-9999);
salon.pets.push(Lola);//pushes the elemnt ito the array
let Sushi=new Pet("Sushi", 8, "Bulldog", "Male", "Grooming", "Anna Cedillo", 888-888-8888);
salon.pets.push(Sushi);
let Taco=new Pet("Taco", 7, "Chihuahua","Oral Cleaning","Jo Shmo", 777-777-7777)
salon.pets.push(Taco);

//inputs from HTML
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("txtService");
let petOwner = document.getElementById("txtOwner");
let petContact = document.getElementById("txtContact");

function register(){
    console.log("Register");
    //object
    let thePet= new Pet(petName.value , petAge.value , petGender.value , petBreed.value , petService.value , petOwner.value , petContact.value);
    console.log(thePet);
    salon.pets.push(thePet);
    console.log(salon.pets);
}












//console.log(salon.pets);
// salon.pets[0].age // You can change the array index from zero up to the length of the array. If array has 3 objects, then the length of the array starts from 0 and ends at 2

// for (let i = 0; i < salon.pets.length; i++) {
//     const petsAge = salon.pets[i].age;
//     console.log('Index of array is ', i , ' And age of pets is ', petsAge);
    
// }

// const displayAllPetsNames = function () {
//     for (let i= 0; i<salon.pets.length; i++) {
//     console.log(salon.pets[i].name);
//     }
// }


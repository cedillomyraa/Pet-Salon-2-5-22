//arrays= a collection of elements in a variable
//let names =[ "Maira,Victoria,Mark,Tom"] access the names by creating an index.
//names[1]>>Victoria

let names= ["Victoria", "Mark", "Mike", "Phil"];
//console.log(names);

let mixed = [99, "Derek", true, null,45,"Hello"];
//console.table(mixed);
function displayNames(){
    for(let i=0;i<names.length;i++){
        console.log(names[i]);
    }
}
//displayNames();

let ages = [55,45,23,34,55,78];
//travel the ages array
function displayAges(){
    for (let i= 0; i<ages.length; i++) {
        console.log(ages[i])
    }
}
//displayAges();

//objects literal

let student={
    name:"Joey",
    age:80,
    student:true,
    grade:"A-",
    music:["Eminem","Coldplay","Rolling Stones"],
    address:{
        city:"San Diego",
        country:"USA"
    }
}
console.log(student.name);
//console.log(student["student"]);
console.log(student.music[0]);
console.log(student["music"][0]);

//anonymous objects an array with a collection of objects
let students=[
    {
        name:"Guillermo",
        age:24,
        activeStudent:"true"
    },
    {
        name:"Arturo",
        age:23,
        activeStudent:"true"
    },
    {
        name:"Mark",
        age:30,
        activeStudent:"false"
    }
]
console.log(students);
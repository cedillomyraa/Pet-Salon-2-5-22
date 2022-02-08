//object literal

let lion ={
    name:"Simba",
    kingOfJungle:true,
    food:"Carnivore"
}
let lion2= {
    name:"Nala",
    kingOfJungle:false,
    food:"Carnivore"
}
//object constructor
function Animal(name,kingOfJungle,food){
    this.name=name;
    this.kingOfJungle=kingOfJungle;
    this.food=food;
    this.hunger=10;
    this.feed=function(){
        console.log("Feeding...");
        this.hunger=this.hunger-2;
    }
}
//create the object
let lionC = new Animal("Simba",true,"Carnivore");
console.log(lionC);
let lionD= new Animal("Nala",false,"Carnivore");
console.log(lionD);

//create a constructor for students,instructor, assignment,courses,exam

function Assignments(assignment,studentname,duedate,points){
    this.assignment=assignment;
    this.studentname=studentname;
    this.duedate=duedate;
    this.points=points;
}
let studentA = new Assignments("Pet Salon", "Maira Quinones", "02/05/2022", 2.66);
console.log(studentA);
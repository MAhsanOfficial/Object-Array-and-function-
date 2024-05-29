// // // // // // // OBJECT ARRAY AND FUNCTION.

// // // // // // // Assignment 1: Building Your Friend List


type Friends = { firstName: string; lastName: string; id: number; }
const people = { friends :[] as Friends[] }
let friend1 = {
   firstName:"Ahsan",
   lastName:"Ali",
   id:1   //Optional
}
let friend2 ={
    firstName:"Danish",
    lastName:"Taimoor",
    id:2  //Optional
} 
let friend3 = {
 firstName:"Feroz",
 lastName:"Khan",
 id:3   //Optional
}
people.friends.push(friend1,friend2,friend3)
console.log(people);


// // // // // // // Assignment 2:Manipulating an Array: Rearranging Words
 
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
const stringArray = scrambledArray.map(element => element.toString())
const Rearranging = []

Rearranging.push(stringArray.splice(stringArray.indexOf("I"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("am"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("a"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("student"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("of"),1)[0])  
Rearranging.push(stringArray.splice(stringArray.indexOf("GIAIC"),1)[0])  

const sentence = Rearranging.join(" ")
console.log(sentence);




// // // // // // // Assignment 3: Company Product Catalog

const inventory = [];
let product1 = {
    name:"Smart Watch",
    model:2024,
    cost:3500,
    quantity:40
}
let product2 = {
    name:"Airpods",
    model:2023,
    cost:3000,
    quantity:30
}
let product3 = {
    name:"HeadPhones",
    model:2022,
    cost:4000,
    quantity:25
}
inventory.push(product1,product2,product3)
console.log(inventory[2].quantity);

let product4 ={
    name:"Mobile Phones",
    model:2024,
    cost:20000,
    quantity:45
}
inventory.push(product4)
console.log(inventory);
console.log(inventory[0].name);  

inventory[1].quantity = 120;
console.log(inventory[1].quantity)


// // // // // // Assignment : 4  : Student List Organizer 

interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}
const students: Student[] = [
    { name: "Danish",
     isSenior: true, 
     hasCompletedAssignments: false 
    },
    { name: "Ahsan",
    isSenior: true,
    hasCompletedAssignments: true 
},
{ name: "Ali",
isSenior: false,
hasCompletedAssignments: true 
},
{ name: "Hassan",
 isSenior: false,
  hasCompletedAssignments: false 
},
];
function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed assignments:", seniorStudentsWithAssignments);
function removeStudentsWithoutAssignments(students: Student[]): Student[] {
    return students.filter(student => student.hasCompletedAssignments);
}
const updatedClassList = removeStudentsWithoutAssignments(students);
console.log("Updated class list:", updatedClassList);


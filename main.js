"use strict";
// // // // // // // OBJECT ARRAY AND FUNCTION.
Object.defineProperty(exports, "__esModule", { value: true });
// // // // // // // Assignment 1: Building Your Friend List
// type Friends = { firstName: string; lastName: string; id: number; }
// const people = { friends :[] as Friends[] }
// let friend1 = {
//    firstName:"Ahsan",
//    lastName:"Ali",
//    id:1   //Optional
// }
// let friend2 ={
//     firstName:"Danish",
//     lastName:"Taimoor",
//     id:2  //Optional
// } 
// let friend3 = {
//  firstName:"Feroz",
//  lastName:"Khan",
//  id:3   //Optional
// }
// people.friends.push(friend1,friend2,friend3)
// console.log(people);
// // // // // // // Assignment 2:Manipulating an Array: Rearranging Words
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const stringArray = scrambledArray.map(element => element.toString());
const Rearranging = [];
Rearranging.push(stringArray.splice(stringArray.indexOf("I"), 1)[0]);
Rearranging.push(stringArray.splice(stringArray.indexOf("am"), 1)[0]);
Rearranging.push(stringArray.splice(stringArray.indexOf("a"), 1)[0]);
Rearranging.push(stringArray.splice(stringArray.indexOf("student"), 1)[0]);
Rearranging.push(stringArray.splice(stringArray.indexOf("of"), 1)[0]);
Rearranging.push(stringArray.splice(stringArray.indexOf("GIAIC"), 1)[0]);
const sentence = Rearranging.join(" ");
console.log(sentence);
const students = [
    { name: "Ahsan",
        isSenior: true,
        hasCompletedAssignments: true
    },
    { name: "Danish",
        isSenior: true,
        hasCompletedAssignments: false
    },
    { name: "Ali",
        isSenior: false,
        hasCompletedAssignments: true
    },
    { name: "Hassan",
        isSenior: false,
        hasCompletedAssignments: false
    }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students who have completed assignments:", seniorStudentsWithAssignments);
function removeStudentsWithoutAssignments(students) {
    return students.filter(student => student.hasCompletedAssignments);
}
const updatedClassList = removeStudentsWithoutAssignments(students);
console.log("Updated class list:", updatedClassList);

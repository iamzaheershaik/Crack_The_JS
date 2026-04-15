//Question NO:1

console.log(x);
var x = 5; //undefined because of hoisting, variable declaration is hoisted but not the assignment

console.log(x);
let x = 5;  //reference error because of temporal dead zone

console.log(x);
const x = 5; //reference error because of temporal dead zone

console.log(x+1);
var x =5;  //NaN because of hoisting, variable declaration is hoisted but not the assignment, so x is undefined at the time of console.log(x+1)

var x = 5; 
console.log(x+1); //6 because x is assigned the value 5 before the console.log(x+1) statement is executed




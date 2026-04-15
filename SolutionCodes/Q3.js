// Q3 Question Three

console.log(a);
var a = 5; //undefined because of hoisting, variable declaration is hoisted but not the assignment

console.log(a);
let a = 5;  //reference error because of temporal dead zone

console.log(c);
    function c() {}; //[Function: c] because function declarations are hoisted, so the entire function is available before its declaration in the code.

var d;
console.log(d);//undefined because of hoisting, variable declaration is hoisted but not the assignment

var d = 5;
console.log(d); //5 because d is assigned the value 5 before the console.log(d) statement is executed
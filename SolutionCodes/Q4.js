//question 4 
/*
 Question what is the Output of the following code and why
*/

var x = 1;
function foo(){
    console.log(x); //undefined
    var x=5
}
foo();

let x = 1;
function foo(){
    console.log(x);
    let x=5 // reference error
}
foo(); 


//Answer : option c: undefined
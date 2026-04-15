// Question 5;

foo();
var foo = function () {
    console.log('A');
}
function foo() {
    console.log('B');
}

//Answer : option a: B because function declarations are hoisted, so the entire function is available before its declaration in the code. The variable assignment of foo to the function expression happens after the function declaration, so it does not affect the hoisting of the function declaration.
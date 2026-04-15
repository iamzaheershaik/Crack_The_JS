function outer() {
  var x = 10;
  function inner() {
    var x = 20;
    return x;
  }
  return inner() + x;
}
console.log(outer()); // 30 because inner() returns 20 and x in outer() is 10, so 20 + 10 = 30
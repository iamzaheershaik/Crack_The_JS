function createFunctions() {
  let funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
  }
  return funcs;
}
let fs = createFunctions();
console.log(fs[0](), fs[1](), fs[2]());
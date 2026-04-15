function outer() {
  let x = 10;
  return {
    get: () => x,
    set: (val) => { x = val; }
  };
}
const obj = outer();
obj.set(99);
console.log(obj.get());
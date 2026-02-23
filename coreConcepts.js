// console.log(typeof null); // obj
// console.log(typeof NaN); // number
// console.log(typeof []); // obj
// console.log([] instanceof Array); // true



// Ques-2
// let a = { x: 1 };
// let b = a;
// b.x = 5;

// console.log(a.x);


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise1");
});

Promise.resolve().then(() => {
  console.log("Promise2");
});

console.log("End");
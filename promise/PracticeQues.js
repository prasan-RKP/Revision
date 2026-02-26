// Lets solve few questions

// Q.1)
/*
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise 1"));

Promise.resolve().then(() => console.log("Promise 2"));

console.log("End");  

// start,end, promise1, promise2
*/

// Q.2)
/* 
const p = new Promise((resolve, reject) => {
  console.log("A");
  resolve("B");
  console.log("C");
  reject("D");
  console.log("E");
});

p.then((val) => console.log("Then:", val))
 .catch((err) => console.log("Catch:", err));
 //a,c,e -> b
 */

// Q.3) What is the output order?

/*
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(3);

test();

console.log(4);
// 3,1,4, 2
*/

// Q.4) What happens here?
/*
Promise.resolve(1)
  .then(x => x + 1)
  .then(x => { throw x })
  .then(x => console.log(x))
  .catch(e => console.log("Error:", e))
  .then(() => console.log("After catch"));

// doubt on this question
*/

// Q.5) Predict the final result:
/*
Promise.allSettled([
  Promise.resolve(10),
  new Promise(r => setTimeout(() => r(20), 100)),
  Promise.reject("Failed"),
  Promise.resolve(30)
])
  .then(v => console.log("Success:", v))
  .catch(e => console.log("Failed with:", e));
  

  // if 'promise.all' -> failed(only answer) if it could 'promise.allSettled() -> 10,20,failed, 30
*/

// Q.6)
/*
async function f() {
  try {
    await Promise.reject("Boom");
  } catch (e) {
    console.log("Caught:", e);
  }
  return "Done";
}

f().then(v => console.log("Result:", v));
// caught: Boom
// Result: Done

*/

// Q.7) What will be the console output?
/*
const p1 = new Promise(r => setTimeout(() => r("p1"), 300));
const p2 = new Promise(r => setTimeout(() => r("p2"), 100));
const p3 = new Promise((_, rej) => setTimeout(() => rej("p3 error"), 200));

Promise.race([p1, p2, p3])
  .then(v => console.log("Winner:", v))
  .catch(e => console.log("Race lost:", e));

  // Winner: p2
  */

// Q.8)  What gets logged in this order

/*

console.log("A");

new Promise((resolve) => {
  console.log("B");
  resolve();
  console.log("C");
})
  .then(() => console.log("D"))
  .then(() => console.log("E"));

Promise.resolve().then(() => console.log("F"));

setTimeout(() => console.log("G"), 0);

console.log("H");

// A, B, C, H, F, D, E, G

*/



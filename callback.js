// Q.1) what would be the output
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");

// Answer ->The Logic: Even though the delay is 0ms, setTimeout is a Web API. The callback is sent to the Task Queue and only moves back to the Call Stack once the main script (synchronous code) has finished executing.

// Q.2) Create your own higher order func
// const processArray = (arr, callback) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     res.push(callback(arr[i]));
//   }
//   return res;
// };

// console.log(processArray([1,2,3], (a)=> a * 2));

// Q.3)
// const forEachElement = (arr, callback) => {
//   let res = [];
//   arr.forEach((num) => res.push(callback(num)));

//   return res;
// };

// console.log(forEachElement([10, 20, 30], (n)=> n*2));

// Q.4)  mapSquare
// const mapSquare = (arr, callBack) =>{
//     arr.forEach((num)=> console.log(callBack(num)));
// }

// console.log(mapSquare([1,2,3,4], (n)=> n * n));

// Q.5)

// const delayMessage = async (message, callBack) => {
//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, 2000);
//   });

//   callBack(message);
// };

// console.log(delayMessage("hello", (msg) => console.log("Received:", msg)));

// Q.6)
//[3, 12, 8, 19, 5] n=10
// const filterGreaterThan = (numsArr, myNum, callBack) => {
//   let res = [];
//   for (let i = 0; i < numsArr.length; i++) {
//     if (callBack(numsArr[i])) {
//       res.push(numsArr[i]);
//     }
//   }
//   return res;
// };

// console.log(filterGreaterThan([3, 12, 8, 19, 5], 10, (num) => num > 10));




// Q.7) Callbacks with transformation + condition

// const processAndCollect = (arr, callBack1, callBack2) => {
//   let doubled = [];
//   let isEven = [];

//   for (let j = 0; j < arr.length; j++) {
//     if (callBack1(arr[j])) {
//       isEven.push(arr[j]);
//     }
//   }

//   for (let i = 0; i < isEven.length; i++) {
//     doubled.push(callBack2(isEven[i]));
//   }

  
//   return doubled;
// };

// console.log(
//   processAndCollect(
//     [1, 2, 3, 4, 5],
//     (e) => e % 2 === 0,
//     (d) => d * 2,
//   ),
// );




// Q.8) 

// const findIndex = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i])) {
//       return i;
//     }
//   }
//   return -1;
// };

// const isNegative = x => x < 0;

// console.log(findIndex([4, 7, -5, 9, -5], isNegative));




// Q.9) 
// obj, NaN, arr,true
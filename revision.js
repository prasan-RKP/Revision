// --------------- Basics -------

// Q.1) Reverse a String without using .reverese()

// let str = "method";
// let length = str.length;
// let newStr = "";

// for(let i=length - 1 ; i>=0; i--) {
//    newStr += str[i];
// }

// console.log(newStr);

// Q.2)  Find the largest number in an array

// let largeNums = [12, 34, 5, 78, 22, 10, 86];
// let bigNum = largeNums[0];
// let second = "";

// for (let i = 1; i < largeNums.length; i++) {
//   if (bigNum < largeNums[i]) {
//     second = bigNum;
//     let temp = largeNums[i];
//     bigNum = temp;
//   }
// }
// console.log("Biggest Num", bigNum);
// console.log("2nd biggest num", second);

// Q.3)Remove duplicates from an array

// let arr = ["q", "w", "e", "r", "a", "e", "t", "w", "r", "y", "a"];

// let length = arr.length;
// let newArr = [];

// for (let i = 0; i < length; i++) {
//   if (!newArr.includes(arr[i])) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// Q.4) Write a function that counts vowels in a string.

// let str = "education";
// let count = 0;
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// for(let i=0; i<str.length; i++) {
//    if(vowels.includes(str[i])){
//     count ++;
//    }
// }

// console.log(count);

// ---------- Array Methods -----------

// Q.5) Using map() convert
// let arr = [1,2,3,4];
// arr = arr.map((num)=> num * num);
// console.log(arr);

// Q.6) Using Filter() return only even number
// let arr = [1,4,9,16];
// arr = arr.filter((num)=> num % 2 === 0);
// console.log(arr);

// Q.7)
// let arr = [
//   { name: "A", age: 20 },
//   { name: "B", age: 25 }
// ]
// arr = arr.map((n)=>(n.name));
// console.log(arr);

// Q.8) sort an array of numbers using .sort()

// let nums = [12, 3, 4, 56, 99];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = 0; j < nums.length - i - 1; j++) {
//     if (nums[j] > nums[j + 1]) { 
//       let temp = nums[j];
//       nums[j] = nums[j+1];
//       nums[j+1] = temp;
//     }
//   }
// }

// console.log(nums)







//


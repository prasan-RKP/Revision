// -----------------  Segment - 1 ------------

// Q.1) Even/Odd Numbers
let a = 45;
if (a === 0) {
  console.log("The number is ZERO");
} else if (a % 2 === 0) {
  console.log("The number is Even");
} else {
  console.log("The number is odd");
}

// Q.2) Reverse a String without using .reverse()

let str = "facebook";
let reverse = "";

for (let i = 1; i <= str.split("").length; i++) {
  reverse += str[str.split("").length - i];
}

console.log(reverse);

// Q.3) Find the largest number in an array

let arr = [12, 5, 6, 8, 45];
let large = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > large) {
    large = arr[i];
  }
}

console.log(large);

// Q.4) Remove duplicates from array

let dupArr = ["a", "e", "e", "i", "o", "u", "u"];
let tempArr = [];

for (let i = 0; i < dupArr.length; i++) {
  if (!tempArr.includes(dupArr[i])) {
    tempArr.push(dupArr[i]);
  }
}

console.log("solved", tempArr);

// Q.5) Write a function that counts vowels in a string.

let myStr = "ducatin";
let vowel = ["a", "e", "i", "o", "u"];
let count = 0;
const countVowels = () => {
  for (let i = 0; i < myStr.split("").length; i++) {
    if (vowel.includes(myStr[i])) {
      count++;
    }
  }
  return count;
};

console.log(countVowels());

// ----------------- Segement 2 -----------

// Q.1) convert  this [1,2,3,4]  → [1,4,9,16] using map.

let nums = [1, 2, 3, 4];
nums = nums.map((num) => num * num);
console.log(nums);

// Q.2) Return only Even numbers from [1,2,3,4]

let evenArr = nums.filter((num) => num % 2 === 0);
console.log(evenArr);

// Q.3) use reduce to sum of the array
let sum = nums.reduce((prev, curr) => prev + curr, 0);
console.log("Total sum", sum);

// Q.4) [{name:"A", age:20}, {name:"B", age:25}]  -> into array of only names using map.

let arrObjs = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
];

let names = arrObjs.map((obj) => obj.name);
console.log(names);

// Q.4) Sort an array of numbers without using .sort().

let sortNums = [1, 45, 23, 56, 78, 2, 21];
let length = sortNums.length;

for (let i = 0; i < length; i++) {
  for (let j = 0; j < length - i - 1; j++) {
    if (sortNums[j] > sortNums[j + 1]) {
      let temp = sortNums[j];
      sortNums[j] = sortNums[j + 1];
      sortNums[j + 1] = temp;
    }
  }
}

console.log(sortNums);

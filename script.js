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

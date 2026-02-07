// Q.1) Even/Odd Numbers

let a = 0;
if (a === 0) {
  console.log("It a zero Number");
} else if (a % 2 === 0) {
  console.log("It is Even Number");
} else {
  console.log("It is a odd number");
}

// Q.2) Reverse a String without using .reverse()

let str = "solo";
let reverse = "";

for (let i = str.split("").length; i > 0; i--) {
  reverse += str[i - 1];
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

let dupArr = ['a', 'e', 'e', 'i' ,'o', 'u', 'u'];
console.log([...new Set(dupArr)]);

//5- Write a function that, takes an array of integers as input, iterates over the array, and returns a new array.
//  The returned array should contain the result of raising 2 to the power of the original input element.
//Using for-loop

let arr = [0, 1, 2, 3, 4, 5];
// let arrayRaise = (arr) => {
let result = [];
//   for (i = 0; i < arr.length; i++) {
//     let newArray = arr[i];
let newArray = Math.pow(2, arr[i]);
//     let power = Math.pow(2, newArray);
result.push(newArray);
console.log(result);
//   }
//   return result;
// };
// console.log(arrayRaise(arr));

//Using forEach

// let arr = [0, 1, 2, 3, 4, 5];
// let arrayRaise = (arr) => {
//   let forEach1 = [];
//   arr.forEach((x) => {
//     forEach1.push(Math.pow(2, x));
//   });
//   return forEach1;
// };
// console.log(arrayRaise(arr));

//Using map

// let arr = [0, 1, 2, 3, 4, 5];

// let arrayRaise = (arr) => {
//   let map1 = arr.map((x) => Math.pow(2, x));

//   return map1;
// };

// console.log(arrayRaise(arr));

//6- Write a function that, takes an array of numbers as input, uses map to return a
//new array where each element is either the string "even" or the string "odd", based on each value.

// let arr = [1, 2, 3, "Hamzeh"];
// let newArray = (arr) => {
//   let map2 = arr.map((x) => {
//     if (typeof x === "number") {
//       if (x % 2 === 0) {
//         return "even";
//       } else {
//         return "odd";
//       }
//     } else {
//       return "N/A";
//     }
//   });
//   return map2;
// };
// console.log(newArray(arr));

// 7- Write a function named fizzbuzz that takes in an array of numbers.
// Iterate over the array using forEach or map to determine the output based on several rules:
//   - If a number is divisible by 3, add the word "Fizz" to the output array.
//   - If the number is divisible by 5, add the word "Buzz" to the output array.
//   - If the number is divisible by both 3 and 5, add the phrase "Fizz Buzz" to the output array.
//   - Otherwise, add the number to the output array.
// Return the resulting output array.

// let arr = [1, 2, 3, 5, 6, 9, 15, 20];
// let fizzbuzz = (arr) => {
//   let map3 = arr.map((x) => {
//     if (x % 3 === 0 && x % 5 === 0) {
//       return "Fizz Buzz";
//     } else if (x % 3 === 0) {
//       return "Fizz";
//     } else if (x % 5 === 0) {
//       return "Buzz";
//     } else {
//       return x;
//     }
//   });
//   return map3;
// };
// console.log(fizzbuzz(arr));

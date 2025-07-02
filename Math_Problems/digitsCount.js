// Problem: Count the Number of Digits in a Number
// Given an integer, count and print the number of digits it contains.
// Example: Input: 12345  Output: Number of Digits in 12345 is : 5

let number = 12345;
let count = 0,
  num = number;

while (number > 0) {
  let r = number % 10;
  count++;
  number = Math.floor(number / 10);
}
console.log("Number of Digits in " + num + " is : " + count);

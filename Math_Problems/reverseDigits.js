// Problem: Reverse the Digits of a Number
// Given an integer, reverse its digits and print the reversed number.
// Example: Input: 19786  Output: 68791

let number = 19786;
let num = number;
let reversedNum = 0;
while (num > 0) {
  let r = num % 10;
  reversedNum = reversedNum * 10 + r;
  num = Math.floor(num / 10);
}
console.log(reversedNum);

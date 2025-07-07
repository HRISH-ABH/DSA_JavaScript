// Problem: Reverse a String
// Given a string, reverse its characters and return the reversed string.
// Example: Input: "hello shery"  Output: "yrehS olleh"
str = "hello shery";

function reverseString(str) {
  let arr = str.split("");
  let i = 0,
    j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  return arr.join("");
}

console.log(reverseString(str));

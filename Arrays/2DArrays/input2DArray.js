// Problem: Input a 2D Array from User
// Prompt the user to enter the number of inner arrays (rows), then input elements for each row (with 4 columns).
// Finally, print the resulting 2D array.
// Example: If user enters 2 for rows and inputs elements, output could be: [[1,2,3,4],[5,6,7,8]]



let prompt = require("prompt-sync")();

let innerArrays = Number(prompt("Enter no. of inner arrays"));
let arr = new Array(innerArrays);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(4);
}
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = prompt("Enter the ELement: ");
  }
}
console.log(arr);

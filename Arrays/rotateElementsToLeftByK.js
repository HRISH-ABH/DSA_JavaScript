// Problem: Rotate Array Elements to the Left by K Positions (Brute Force Approach)
// Given an array and a number k, rotate the array to the left by k positions using a brute force method.
// Example: Input: arr = [7, 3, 1, 10, 10], k = 4  Output: [10, 7, 3, 1, 10]

let arr = [7, 3, 1, 10, 10];
console.log(arr);
let k = 4;

for (let j = 0; j < k; j++) {
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
}
console.log(arr);

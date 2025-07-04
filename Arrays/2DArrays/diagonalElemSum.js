// Problem: Sum of Diagonal Elements in a 2D Array (Matrix)
// Given a square 2D array (matrix), print all its diagonal elements (both primary and secondary diagonals) and calculate their sum.
// Example: For arr = [
//   [1, 2, 4],
//   [5, 6, 7],
//   [8, 9, 10]
// ]
// Output: Diagonal Elements: 1, 6, 10, 4, 8
// Sum: 29

let arr = [
  [1, 2, 4],
  [5, 6, 7],
  [8, 9, 10],
];
let diagonalSum = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (i == j || i + j == arr[i].length - 1) {
      console.log(`Diagonal Elements: ${arr[i][j]}`);

      diagonalSum += arr[i][j];
    }
  }
}
console.log(diagonalSum);

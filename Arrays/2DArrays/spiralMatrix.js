// Problem: Spiral Order Traversal of a 2D Array (Matrix)
// Given a 2D array (matrix), print all its elements in spiral order starting from the top-left corner.
// Example: For matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let m = matrix.length;

let n = matrix[0].length;
console.log(m);
console.log(n);
let size = m * n;
let minC = 0,
  maxC = n - 1,
  minR = 0,
  maxR = m - 1;

let ansArray = [];

while (ansArray.length < size) {
  //  first row
  for (let i = minC; i <= maxC && ansArray.length < size; i++) {
    ansArray.push(matrix[minR][i]);
  }
  minR++;

  // right column
  for (let i = minR; i <= maxR && ansArray.length < size; i++) {
    ansArray.push(matrix[i][maxC]);
  }
  maxC--;

  // bottom row
  for (let i = maxC; i >= minC && ansArray.length < size; i--) {
    ansArray.push(matrix[maxR][i]);
  }
  maxR--;

  for (let i = maxR; i >= minR && ansArray.length < size; i--) {
    ansArray.push(matrix[i][minC]);
  }
  minC++;
}

console.log(ansArray);

// Problem: Rotate a Square Matrix by 90 Degrees Clockwise
// Given a square 2D array (matrix), rotate it by 90 degrees clockwise in-place.
// Approach: First take the transpose of the matrix, then reverse each row.
// Example: For matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function reverse(row, i, j) {
  while (i < j) {
    [row[i], row[j]] = [row[j], row[i]];
    i++;
    j--;
  }
  return row;
}

// transpose +reverse

// transpose
for (let i = 0; i < matrix.length; i++) {
  for (let j = i + 1; j < matrix[i].length; j++) {
    [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
  }
}

//reverse
for (let i = 0; i < matrix.length; i++) {
  reverse(matrix[i], 0, matrix[i].length - 1);
}

console.log(matrix);

// Problem: Traversing a 2D Array
// Given a 2D array (matrix), print all its elements row by row.
// Example Output for the given input:
// 1  2  3  45  5  
// 5  -1  -34  5  12  
// 0  99  88  7  3  1  


let arr = [
  [1, 2, 3, 45, 5],
  [5, -1, -34, 5, 12],
  [0, 99, 88, 7, 3, 1],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    process.stdout.write(`${arr[i][j]}  `);
  }
  console.log();
}

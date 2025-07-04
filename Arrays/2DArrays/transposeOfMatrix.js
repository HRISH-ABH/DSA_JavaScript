let arr = [
  [2, 4, -1],
  [-10, 5, 11],
  [18, -7, 6],
];
// let ansArray = Array.from({ length: arr[0].length }, () => Array(arr.length));
// for (let i = 0; i < ansArray.length; i++) {
//   for (let j = 0; j < ansArray[i].length; j++) {
//     ansArray[i][j] = arr[j][i];
//   }
// }

// console.log(arr);
// console.log(ansArray);

// for sqaure matrix inPlace solution
let swaps = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr[i].length; j++) {
    [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    swaps++;
  }
}
console.log(`No. of swaps done ${swaps}`);

console.log(arr);

// Problem: Bubble Sort
// Given an array, sort it in ascending order using the Bubble Sort algorithm.
// Print "sorted" if the array becomes sorted before all passes are complete.
// Example: Input: [3, 5, 1, 9, 7]  Output: [1, 3, 5, 7, 9]
let arr = [3, 5, 1, 9, 7];

for (let i = 0; i < arr.length - 1; i++) {
  let swap = false;
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      swap = true;
    }
  }
  if (!swap) {
    console.log("sorted");
    break;
  }
}
console.log(arr);

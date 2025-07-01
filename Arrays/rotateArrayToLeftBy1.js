let arr = [7, 3, 1, 10, 10];
console.log(arr);

let temp = arr[0];
for (let i = 0; i < arr.length - 1; i++) {
  arr[i] = arr[i + 1];
}
arr[arr.length - 1] = temp;
console.log(arr);

// Problem: Linear Search in an Array
// Given an array and a target value, search for the target in the array using linear search.
// If the target is found, print its index; otherwise, print "Not found!!".
// Example: Input: arr = [1, 6, 99, 8, -1, 4], target = 99  Output: Element Found at index : 2

let arr = [1, 6, 99, 8, -1, 4];
let target = 99;
let idx = 0;
let found=false;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == target) {
    idx = i;
    found=true;
  }
}

if(found) console.log("Element Found at index : " +idx);
else console.log("Not found!!");


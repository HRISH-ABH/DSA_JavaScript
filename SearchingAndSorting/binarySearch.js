// Problem: Binary Search in a Sorted Array
// Given a sorted array and a target value, use binary search to determine if the target exists in the array.
// Print a message indicating whether the element is present or not.
// Example: Input: arr = [5, 67, 89, 99, 101, 900], target = 11  Output: Not Found!!

let arr = [5, 67, 89, 99, 101, 900];

let left = 0,
  right = arr.length - 1,
  target = 11,
  mid = 0;
let elemFound = false;
while (left <= right) {
  mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    elemFound = true;
    break;
  } else if (arr[mid] > target) right = mid - 1;
  else left = mid + 1;
}

if (elemFound) console.log("The elem is present in the array!!");
else console.log("Not Found!!");

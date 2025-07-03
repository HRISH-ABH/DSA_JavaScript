// Problem: Rotate Array Elements to the Left by K Positions (Brute Force Approach)
// Given an array and a number k, rotate the array to the left by k positions using a brute force method.
// Example: Input: arr = [7, 3, 1, 10, 10], k = 4  Output: [10, 7, 3, 1, 10]

let arr = [7, 3, 1, 10, 10];
console.log(arr);
let k = 4;

// for (let j = 0; j < k; j++) {
//   let temp = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = temp;
// }
// console.log(arr);


// using extra space 


// let tempArray=new Array(arr.length);
// k=k%arr.length;

// for(let i=0;i<arr.length;i++){
//   tempArray[i]=arr[(i+k)%arr.length];
// }
// console.log(tempArray);



// Optimal approach
// by reversing the array multiple times

function reverseArray(arr,i,j){
  while(i<j){
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
  }
  
}

reverseArray(arr,0,k-1);
reverseArray(arr,k,arr.length-1);
reverseArray(arr,0,arr.length-1);
console.log(arr);

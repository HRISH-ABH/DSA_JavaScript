// Problem: Rotate Array Elements to the Right by K Positions (Brute Force and Optimal Approach)
// Given an array and a number k, rotate the array to the right by k positions.
// Brute force and optimal (array reversal) methods are shown.
// Example: Input: arr = [7, 3, 1, 10, 10], k = 3  Output: [1, 10, 10, 7, 3]





let arr=[7,3,1,10,10];
console.log(arr);
let k=3;
// k=k%arr.length;

// for(let i=0;i<k;i++){
// let temp=arr[arr.length-1];
// for(let i=arr.length-1;i>0;i--){
    

//         arr[i]=arr[i-1];
    
    
// }
// arr[0]=temp;
// }

// console.log(arr);

// using extraSpace
// let tempArray = new Array(arr.length);
// k = k %arr.length;

// for (let i = 0; i < arr.length; i++) {
//   tempArray[(i + k) % arr.length] = arr[i];
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

reverseArray(arr,0,arr.length-1);
reverseArray(arr,0,k-1);
reverseArray(arr,k,arr.length-1);
console.log(arr);
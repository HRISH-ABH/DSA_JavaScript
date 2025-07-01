// Problem: Move all zeroes in a binary array to the end without using extra space.
// Given an array containing only 0s and 1s, rearrange the array in-place so that all 1s come first, followed by all 0s.
// Example: Input: [0,0,1,0,1,1,0,0,0,1,1]  Output: [1,1,1,1,1,0,0,0,0,0,0]

let arr=[0,0,1,0,1,1,0,0,0,1,1];
 let i=0,j=0;
    while(i<arr.length){
        if(arr[i]==1){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
            j++;
        }
        i++
        
    }
    console.log(arr) ;
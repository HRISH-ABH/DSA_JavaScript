// Problem: Move all zeroes in a binary array to the end while keeping the order of ones.
// Given an array containing only 0s and 1s, rearrange the array so that all 1s come first, followed by all 0s.
// Example: Input: [0,0,1,0,1,1,0,0,0,1,1]  Output: [1,1,1,1,1,0,0,0,0,0,0]

let arr=[0,0,1,0,1,1,0,0,0,1,1];
 
let newArray=[];
let zeroesCnt=0,oneesCnt=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]==0) zeroesCnt++;
}
oneesCnt=arr.length-zeroesCnt;
let i=0;
while(oneesCnt--){
    newArray[i++]=1;
}
while(zeroesCnt--){
    newArray[i++]=0;
}
console.log(newArray);
// Problem: Insertion Sort
// Given an array, sort it in ascending order using the Insertion Sort algorithm.
// Example: Input: [3, 5, 1, 9, 7]  Output: [1, 3, 5, 7, 9]


let arr = [3, 5, 1, 9, 7];

for(let i=1;i<arr.length;i++){
    let key=arr[i];
    let j=i-1;

    while(j>=0 &&arr[j]>key){
        arr[j+1]=arr[j];
        j--;
    }
    arr[j+1]=key;
}
console.log(arr);

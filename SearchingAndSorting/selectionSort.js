// Problem: Selection Sort
// Given an array, sort it in ascending order using the Selection Sort algorithm.
// Example: Input: [3, 5, 1, 9, 7]  Output: [1, 3, 5, 7, 9]


let arr = [3, 5, 1, 9, 7];

for(let i=0;i<arr.length;i++){
    let small=i;
    for(let j=i+1;j<arr.length;j++){
        if(arr[small]>arr[j]){
            small=j;
        }
    }
    let temp=arr[i];
    arr[i]=arr[small];
    arr[small]=temp;
}
console.log(arr);

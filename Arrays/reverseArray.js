let arr=[7,3,1,10,10];

// Using Extra Space

// let newArray=new Array(arr.length);
// let j=0;
// for(let i=arr.length-1;i>=0;i--){
//     newArray[j++]=arr[i];
// }
// console.log(arr);
// console.log(newArray);


// 2 Pointer

console.log(arr);
let left=0,right=arr.length-1;

while(left<right){
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    left++;
    right--;
}
console.log(arr); 

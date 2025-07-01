let arr=[7,3,1,10,10];
console.log(arr);

let temp=arr[arr.length-1];
for(let i=arr.length-1;i>0;i--){
    

        arr[i]=arr[i-1];
    
    
}
arr[0]=temp;
console.log(arr);
// all the zeroes in the beginning and ones at last
let arr=[0,1,1,0,1,0,0,1];
console.log(arr);

let i=0,j=0;

while(i<arr.length){
    if(arr[i]==0){
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        j++
    }
    i++;
}
console.log(arr);
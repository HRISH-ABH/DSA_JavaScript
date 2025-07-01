
let arr=[1,99,100,-1,2];

let max=arr[0],maxIdx=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            maxIdx=i;
        }
        
    }
console.log([max,maxIdx]);
    
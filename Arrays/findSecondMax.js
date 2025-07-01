let arr=[7,3,1,10,10];

let max=-Infinity,secondMax=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            secondMax=max;
            max=arr[i];
        }
        else if(arr[i]>secondMax && arr[i]<max){
            secondMax=arr[i];
        }
    }
    console.log (secondMax );
let arr=[1,2,4,5,1,7];
let sum=0,mean=0;

for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
mean=Number((sum/arr.length).toFixed(1));

console.log([sum,mean]);

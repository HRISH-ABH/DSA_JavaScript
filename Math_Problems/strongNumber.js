
/**
 * A number is called a Strong Number if the sum of the factorials of its digits is equal to the number itself.
 * Example: 145 => 1! + 4! + 5! = 145
 */


const promptSync =require("prompt-sync")();


let num=Number(promptSync("Enter a Number : "));
let temp=num;
let sum=0;
function calculateFact(num){
    if(num<=1) return 1;
    return num*calculateFact(num-1);
}
while(temp>0){
    let r=temp%10;
    sum+=calculateFact(r);
    console.log(sum);
    
    temp=Math.floor(temp/10);

}

if(num==sum) console.log("Strong Number");
else console.log("Not a Strong Number");


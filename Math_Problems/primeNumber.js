const promptSync = require('prompt-sync')();
let n=promptSync("Enter a Number: ");

function isPrime(n){
    if(n<=1) return false;
    if(n<=3) return true;
    if(n%2===0 || n%3===0) return false;
    for(let i=5;i<=Math.floor(Math.sqrt(n));i+=6){
        if(n%i===0 || n%(i+2)===0) return false;
    }
    return true;
}

if(isPrime(n)){
    console.log(`${n} is a prime number`);
}
else{
    console.log(`${n} is not a prime number`);
}
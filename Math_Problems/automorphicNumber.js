// An automorphic number is a number whose square ends with the same digits as the number itself.
// For example, 5 is automorphic because 5^2 = 25, and 25 ends with 5.
// Similarly, 76 is automorphic because 76^2 = 5776, and 5776 ends with 76.
// This program checks if a given number is automorphic.

const promptSync = require("prompt-sync")();


function isAutomorphic(num) {
    let square = num * num;
    let digits = 0;
    let temp = num;
    while (temp > 0) {
        digits++;
        temp = Math.floor(temp / 10);
    }
    let mod = Math.pow(10, digits);
    return (square % mod) === num;
}


let n =Number( promptSync("Enter a Number "));
if (isAutomorphic(n)) {
   
    
    console.log(n + " is an automorphic number");
} else {
    console.log(n + " is not an automorphic number");
}

// Problem: Happy Number
// Given a number n, determine if it is a "happy number".
// A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit repeatedly.
// If it loops endlessly in a cycle that does not include 1, it is not a happy number.
// Example: Input: 19  Output: true (since 1^2 + 9^2 = 82, 8^2 + 2^2 = 68, ..., eventually reaches 1)


function isHappy(n) {
    
    let set =new Set();
    
    while(true){
        let sum=0;
        while(n>0){
            let r=n%10;
            sum+=r*r;
            n=Math.floor(n/10);
        }
        
        if(sum==1) return true;
        else if(set.has(sum)) return false;
        else set.add(sum);
        n=sum;
    }
}
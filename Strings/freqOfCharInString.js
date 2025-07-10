// Problem: Frequency of Each Character in a String
// Given a string, print the frequency of each character (excluding spaces) present in the string.
// Example: Input: "hello world"  
// Output: 
// h: 1
// e: 1
// l: 3
// o: 2
// w: 1
// r: 1
// d: 1
function characterFrequency(str) {
   
    let arr=Array(123).fill(0);
    
    for(let i=0;i<str.length;i++){
        if(str[i]==" ") continue;
        else{
           arr[ str.charCodeAt(i)]++;
        }
    }
    
    // printing
   
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            console.log(`${String.fromCharCode(i)}: ${arr[i]}`);
        }
    }
}


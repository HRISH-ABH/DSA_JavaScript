// Problem: First Letter That Appears Twice
// Given a string, return the first character that appears twice when traversing from left to right.
// Example: Input: "abccbaacz"  Output: "c"

function repeatedCharacter(s) {
    
    let set=new Set();
    
    for(let ch of s){
        if(set.has(ch)) return ch;
        else set.add(ch);
    }
}
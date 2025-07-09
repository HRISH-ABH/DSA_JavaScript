// Problem: Toggle Alphabet Case in a String
// Given a string, convert all uppercase letters to lowercase and all lowercase letters to uppercase.
// Example: Input: "HeLLo123"  Output: "hEllO123"


function toggleCase(str) {
  
  let ans = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i].charCodeAt(0);

    if (ch >= 65 && ch <= 90) {
      // upperCase alphabet
      ans += String.fromCharCode(ch + 32);
    } else if (ch >= 97 && ch <= 122) {
      // lowercase alphabet
      ans += String.fromCharCode(ch - 32);
    } else {
      ans += String.fromCharCode(ch);
    }
  }
  return ans;
}

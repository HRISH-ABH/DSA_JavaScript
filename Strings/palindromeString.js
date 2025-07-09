// Problem: Check if a String is a Palindrome
// Given a string, determine if it is a palindrome (reads the same forwards and backwards).
// Return "Yes" if it is a palindrome, otherwise return "No".
// Example: Input: "aba"  Output: "Yes"



function isPalindrome(str) {
  let i = 0,
    j = str.length - 1;
  let palindrome = true;

  while (i < j) {
    if (str[i] != str[j]) {
      palindrome = false;
      break;
    }
    i++;
    j--;
  }
  if (palindrome) return "Yes";
  return "No";
}

console.log(isPalindrome("aba"));

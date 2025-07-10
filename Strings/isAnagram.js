// Problem: Check if Two Strings are Anagrams
// Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
// Example: Input: "listen", "silent"  Output: true


function isAnagram(s1, s2) {
  let freq = Array(123).fill(0);
  // first string

  for (let i = 0; i < s1.length; i++) {
    freq[s1.charCodeAt(i)]++;
  }

  for (let i = 0; i < s2.length; i++) {
    freq[s2.charCodeAt(i)]--;
  }
  let allZero = freq.every((val) => val === 0);

  return allZero;
}

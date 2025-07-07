// Problem: Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
// Example: Input: "abcaabcdefgh"  Output: 7 (for "abcdefg")
// LC-3

let str = "abcaabcdefgh";

const lengthOfLongestSubstring = function (s) {
  let startPtr = 0;
  let maxLength = 0;
  let set = new Set();

  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[startPtr++]);
    }
    set.add(s[i]);
    maxLength = Math.max(maxLength, i - startPtr + 1);
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring(str));

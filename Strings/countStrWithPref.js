//Problem: Count Strings With Given Prefix
// Given an array of strings and a prefix string, count how many strings in the array start with the given prefix.
// Example: Input: words = ["apple", "app", "banana", "apricot"], pref = "ap"  Output: 3

function countPrefixMatch(words, pref) {
  let cnt = 0;
  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];

    if (currWord.startsWith(pref)) cnt++;
  }
  return cnt;
}

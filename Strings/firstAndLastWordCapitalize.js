// Problem: Capitalize First and Last Letter of Each Word in a String
// Given a string, capitalize the first and last letter of each word in the string.
// Example: Input: "hello dada kai Zalaa"  Output: "HellO DadA KaI ZalaA"


function capitalizeEnds(str) {
  let arr = str.split(" ");
  let ans = "";

  for (let i = 0; i < arr.length; i++) {
    let currWord = arr[i];
    if (currWord.length === 1) {
      ans += currWord.toUpperCase();
    } else {
      ans +=
        currWord[0].toUpperCase() +
        currWord.slice(1, currWord.length - 1) +
        currWord[currWord.length - 1].toUpperCase() +
        " ";
    }
  }
  return ans;
}

console.log(capitalizeEnds("hello dada kai Zalaa"));

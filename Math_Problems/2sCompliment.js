let str = "10101";

function onesCompliment(str) {
  let ans = "";
  for (let e of str) {
    if (e == "1") ans += "0";
    else ans += "1";
  }
  return ans;
}
console.log(onesCompliment(str));

// function twosCompliment(str) {
//   let onesComp = onesCompliment(str);
// }

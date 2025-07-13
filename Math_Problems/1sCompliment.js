let str = "101101";

function onesCompliment(str) {
  let ans = "";
  for (let e of str) {
    if (e == "1") ans += "0";
    else ans += "1";
  }
  return ans;
}

console.log(onesCompliment(str));

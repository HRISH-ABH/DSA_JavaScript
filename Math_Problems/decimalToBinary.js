let n = 10;

function toBinary(n) {
  let ans = "";
  if (n === 0) return "0";
  while (n > 0) {
    let r = n % 2;
    ans = r + ans;
    n = Math.floor(n / 2);
  }
  return ans;
}

console.log(`Binary of ${n} is : ${toBinary(n)}`);

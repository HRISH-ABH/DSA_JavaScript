function fib(n) {
  if (n === 0 || n === 1) return n;
  return fib(n - 1) + fib(n - 2);
}
function printFibonacci(n) {
  if (n <= 0) {
    console.log("Invalid input");
    return;
  }
  let ans = "";

  for (let i = 0; i < n; i++) {
    ans += fib(i) + " ";
  }
  console.log(ans.trim());
}

printFibonacci(7);

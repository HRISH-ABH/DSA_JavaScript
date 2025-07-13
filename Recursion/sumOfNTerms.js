let n = 10;

function sum(n) {
  if (n == 1) return 1;
  return n + sum(n - 1);
}

console.log(`Sum of ${n} terms is : ${sum(n)}`);

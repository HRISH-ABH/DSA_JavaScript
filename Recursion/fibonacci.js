let n = 5;

function fibonacciN(n) {
  if (n < 2) return n;
  console.log(n);

  return fibonacciN(n - 1) + fibonacciN(n - 2);
}

console.log(`${n}th fibonacci term is ${fibonacciN(n)}`);

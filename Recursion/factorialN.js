let num = 5;

function factorialN(n) {
  if (n == 0 || n == 1) return 1;
  return n * factorialN(n - 1);
}

console.log(`Factorial of  ${num}. is : ${factorialN(num)}`);

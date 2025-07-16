function myPow(n, p) {
  if (p == 0) return 1;
  return n * myPow(n, p - 1);
}

console.log(myPow(2.1, 3).toFixed(5));

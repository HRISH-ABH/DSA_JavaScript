function reverseDigits(n, rev) {
  if (n == 0) return rev;
  rev = rev * 10 + (n % 10);
  return reverseDigits(Math.floor(n / 10), rev);
}

console.log(reverseDigits(1003, 0));

let n = 31;

let isPrime = new Array(n + 1).fill(true);

for (let i = 2; i < Math.sqrt(n); i++) {
  if (isPrime[i] == true) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 2; i < isPrime.length; i++) {
  if (isPrime[i]) process.stdout.write(i + " ");
}

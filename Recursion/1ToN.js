function printNum(n) {
  if (n == 0) return;
  printNum(n - 1);
  process.stdout.write(n + " ");
}

printNum(10);

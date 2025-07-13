function printNum(n) {
  if (n == 0) return;
  process.stdout.write(n + " ");
  printNum(n - 1);
}

printNum(10);

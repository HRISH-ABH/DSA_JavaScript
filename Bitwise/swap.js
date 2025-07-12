let a = 10,
  b = 5;
console.log(`a=${a} and b=${b}`);

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(`a=${a} and b=${b}`);

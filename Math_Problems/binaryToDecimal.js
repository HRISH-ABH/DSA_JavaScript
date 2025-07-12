let binary = "1010";

function binaryToDecimal(str) {
  let num = 0;
  let power2 = 1;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === "1") {
      num += power2;
    }
    power2 *= 2;
  }
  return num;
}

console.log(`Decimal value of ${binary}. is : ${binaryToDecimal(binary)}`);

// leetCode 832

image = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

function reverse(row, i, j) {
  while (i < j) {
    [row[i], row[j]] = [row[j], row[i]];
    i++;
    j--;
  }
}
for (let i = 0; i < image.length; i++) {
  reverse(image[i], 0, image[i].length - 1);
}
// invert
for (let i = 0; i < image.length; i++) {
  for (let j = 0; j < image[i].length; j++) {
    image[i][j] = image[i][j] ^ 1;
  }
}
console.log(image);

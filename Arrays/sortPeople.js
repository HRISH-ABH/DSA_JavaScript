//Sort people by height in descending order.

function sortPeople(names, heights) {
  let combinedArr = names.map((names, idx) => [names, heights[idx]]);

  combinedArr.sort((a, b) => b[1] - a[1]);

  return combinedArr.map(([names]) => names);
}

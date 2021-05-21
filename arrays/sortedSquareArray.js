function sortedSquaredArray(array) {
  // Write your code here.
  return array.map(num => Math.pow(num, 2)).sort((a, b) => a - b);
}
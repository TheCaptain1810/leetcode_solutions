/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function (grid, x) {
  // Flatten the grid into a 1D array
  const flatGrid = grid.flat();

  // Check if all elements can be made equal
  const remainder = flatGrid[0] % x;
  for (const num of flatGrid) {
    if (num % x !== remainder) {
      return -1; // Not possible to make all elements equal
    }
  }

  // Sort the flattened grid to find the median
  flatGrid.sort((a, b) => a - b);

  // Find the median
  const n = flatGrid.length;
  const median = flatGrid[Math.floor(n / 2)];

  // Calculate the number of operations to make all elements equal to the median
  const operations = flatGrid.reduce((acc, num) => {
    return acc + Math.abs(num - median) / x;
  }, 0);

  return operations;
};

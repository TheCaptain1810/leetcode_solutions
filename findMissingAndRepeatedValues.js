/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const arr = grid.flat();
  const n = arr.length;

  const set = new Set();
  const res = [];

  for (let i = 0; i < n; i++) {
    if (set.has(arr[i])) {
      res.unshift(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }

  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      res.push(i);
      break;
    }
  }

  return res;
};

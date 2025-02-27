/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function (arr) {
  const index = new Map();
  const dp = new Map();
  let maxLen = 0;

  // Store the index of each value in arr
  for (let i = 0; i < arr.length; i++) {
    index.set(arr[i], i);
  }

  // Iterate through pairs (arr[i], arr[j])
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < j; i++) {
      let k = index.get(arr[i] + arr[j]); // Check if arr[i] + arr[j] exists in arr
      if (k !== undefined && k > j) {
        let len = (dp.get(`${i},${j}`) || 2) + 1; // Default is 2 (if not found)
        dp.set(`${j},${k}`, len);
        maxLen = Math.max(maxLen, len);
      }
    }
  }

  return maxLen >= 3 ? maxLen : 0;
};

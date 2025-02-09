/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let n = nums.length;
  let freq = new Map();
  let goodPairs = 0;

  for (let i = 0; i < n; i++) {
    let diff = nums[i] - i;
    if (freq.has(diff)) {
      goodPairs += freq.get(diff); // Count previous occurrences
      freq.set(diff, freq.get(diff) + 1);
    } else {
      freq.set(diff, 1);
    }
  }

  let totalPairs = (n * (n - 1)) / 2;
  return totalPairs - goodPairs;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  const n = nums.length;
  const elemCount = new Map();

  for (let num of nums) {
    elemCount.set(num, elemCount.get(num) + 1 || 1);
  }

  const dominant = [...elemCount.entries()].sort((a, b) => b[1] - a[1])[0][0];
  const totalCount = elemCount.get(dominant);
  let leftCount = 0;

  for (let i = 0; i < n; ++i) {
    if (nums[i] === dominant) leftCount++;

    if (leftCount > (i + 1) / 2) {
      const rightCount = totalCount - leftCount;

      if (rightCount > (n - (i + 1)) / 2) {
        return i;
      }
    }
  }

  return -1;
};

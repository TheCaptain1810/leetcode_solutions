/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let totalLength = nums.length;
  let negCount = 0;
  let i = 0;

  while (i < totalLength) {
    if (nums[i] >= 0) break;
    negCount++;
    i++;
  }

  while (nums[i] === 0) {
    i++;
  }

  return Math.max(negCount, totalLength - i);
};

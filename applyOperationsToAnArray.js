/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let result = nums.filter((num) => num !== 0);
  let diffLength = nums.length - result.length;

  for (let i = 0; i < diffLength; i++) {
    result.push(0);
  }

  return result;
};

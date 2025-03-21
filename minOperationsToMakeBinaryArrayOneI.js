/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let operations = 0;

  for (let i = 0; i <= nums.length - 3; ++i) {
    if (nums[i] === 0) {
      nums[i] = 1;
      nums[i + 1] = 1 - nums[i + 1];
      nums[i + 2] = 1 - nums[i + 2];
      operations++;
    }
  }

  if (nums.every((i) => i === 1)) {
    return operations;
  } else {
    return -1;
  }
};

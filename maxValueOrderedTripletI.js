/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length - 2; ++i) {
    for (let j = i + 1; j < nums.length - 1; ++j) {
      for (let k = j + 1; k < nums.length; ++k) {
        let curr = (nums[i] - nums[j]) * nums[k];
        max = Math.max(max, curr);
      }
    }
  }

  return max;
};

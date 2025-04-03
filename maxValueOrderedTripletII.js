/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function (nums) {
  const n = nums.length;

  let res = 0,
    iMax = 0,
    diffMax = 0;

  for (let k = 0; k < n; k++) {
    res = Math.max(res, diffMax * nums[k]);
    diffMax = Math.max(diffMax, iMax - nums[k]);
    iMax = Math.max(iMax, nums[k]);
  }

  return res;
};

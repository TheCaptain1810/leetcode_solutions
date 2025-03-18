/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let maxLength = 1;
  let currOR = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    while ((currOR & nums[right]) !== 0) {
      currOR ^= nums[left];
      left++;
    }

    currOR |= nums[right];
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

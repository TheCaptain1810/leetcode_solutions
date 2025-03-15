/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  let left = Math.min(...nums),
    right = Math.max(...nums);

  function canRob(capability) {
    let count = 0,
      i = 0;
    while (i < nums.length) {
      if (nums[i] <= capability) {
        count++;
        i++; // Skip next house
      }
      i++; // Move to the next house
    }
    return count >= k;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (canRob(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
};

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.prefixNums = new Array(nums.length + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    this.prefixNums[i + 1] = this.prefixNums[i] + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.prefixNums[right + 1] - this.prefixNums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

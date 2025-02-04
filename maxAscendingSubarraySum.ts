function maxAscendingSum(nums: number[]): number {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }

        maxSum = Math.max(maxSum, currentSum);   
    }

    return maxSum;
};
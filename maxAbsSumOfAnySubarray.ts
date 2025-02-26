function maxAbsoluteSum(nums: number[]): number {
    let currMax = 0, currMin = 0, maxSum = 0, minSum = 0;

    for (const num of nums) {
        currMax = Math.max(num, currMax + num);
        currMin = Math.min(num, currMin + num);

        maxSum = Math.max(maxSum, currMax);
        minSum = Math.min(minSum, currMin);
    }

    return Math.max(maxSum, Math.abs(minSum));
};
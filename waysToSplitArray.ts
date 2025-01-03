function waysToSplitArray(nums: number[]): number {
    const numsLength = nums.length;
    const prefixSum: number[] = new Array(numsLength).fill(0);
    prefixSum[0] = nums[0];
    
    for (let i = 1; i < numsLength; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i];
    }

    let numberOfValidSplits = 0;
    let totalSum = prefixSum[numsLength - 1];

    for (let i = 0; i < nums.length - 1; i++) {
        let leftSum = prefixSum[i];
        let rightSum = totalSum - leftSum;

        if (leftSum >= rightSum) {
            numberOfValidSplits++;
        }
    }

    return numberOfValidSplits;
};
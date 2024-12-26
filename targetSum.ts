function findTargetSumWays(nums: number[], target: number): number {
    const totalSum: number = nums.reduce((acc, num) => acc + num, 0);

    if ((target + totalSum) % 2 !== 0 || target > totalSum || (target + totalSum) < 0) {
        return 0;
    }

    const subsetSum: number = (target + totalSum) / 2;

    const dp: number[] = new Array(subsetSum + 1).fill(0);
    dp[0] = 1;

    for (const num of nums) {
        for (let j = subsetSum; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[subsetSum];
};
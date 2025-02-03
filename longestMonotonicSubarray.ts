function longestMonotonicSubarray(nums: number[]): number {
    if (nums.length === 1) return 1;
    
    let longestLength = 0;
    let currentIncreasingLength = 1;
    let currentDecreasingLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentIncreasingLength++;
            currentDecreasingLength = 1;
        } else if (nums[i] < nums[i - 1]) {
            currentDecreasingLength++;
            currentIncreasingLength = 1;
        } else {
            currentDecreasingLength = 1;
            currentIncreasingLength = 1;
        }
        longestLength = Math.max(longestLength, currentDecreasingLength, currentIncreasingLength);
    }

    return longestLength;
};
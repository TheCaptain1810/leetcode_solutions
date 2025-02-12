function maximumSum(nums: number[]): number {
    const digitSumMap: { [key: number]: number[] } = {};
    
    for (const num of nums) {
        const digitSum = String(num)
            .split("")
            .reduce((sum, digit) => sum + parseInt(digit), 0);

        if (!digitSumMap[digitSum]) {
            digitSumMap[digitSum] = [];
        }
        digitSumMap[digitSum].push(num);
    }

    let maxSum = -1;
    for (const digitSum in digitSumMap) {
        if (digitSumMap[digitSum].length >= 2) {
            const numbers: number[] = digitSumMap[digitSum].sort((a, b) => b - a);
            maxSum = Math.max(maxSum, numbers[0] + numbers[1]);
        }
    }

    return maxSum;
};
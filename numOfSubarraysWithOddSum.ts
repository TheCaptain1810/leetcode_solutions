function numOfSubarrays(arr: number[]): number {
    const MOD: number = 1e9 + 7;

    let evenCount = 1;
    let oddCount = 0;
    let currSum = 0;
    let result = 0;

    for (const num of arr) {
        currSum += num;

        if (currSum % 2 === 1) {
            result = (result + evenCount) % MOD;
            oddCount++;
        } else {
            result = (result + oddCount) % MOD;
            evenCount++;
        }
    }

    return result;
};
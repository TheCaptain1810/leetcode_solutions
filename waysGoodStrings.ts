function countGoodStrings(low: number, high: number, zero: number, one: number): number {
    const MOD = 1e9 + 7;
    const dp: number[] = new Array(high + 1).fill(0);
    dp[0] = 1; // Base case: 1 way to create an empty string.

    for (let i = 1; i <= high; i++) {
        if (i >= zero) {
            dp[i] = (dp[i] + dp[i - zero]) % MOD;
        }
        if (i >= one) {
            dp[i] = (dp[i] + dp[i - one]) % MOD;
        }
    }

    // Sum up all good strings with lengths in the range [low, high].
    let result = 0;
    for (let i = low; i <= high; i++) {
        result = (result + dp[i]) % MOD;
    }

    return result;
};
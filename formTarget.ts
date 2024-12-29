function numWays(words: string[], target: string): number {
    const MOD = 1e9 + 7;
    const m = target.length;
    const n = words[0].length;

    // Step 1: Precompute character frequencies at each column
    const freq: number[][] = Array.from({ length: 26 }, () => Array(n).fill(0));
    for (const word of words) {
        for (let j = 0; j < n; j++) {
            freq[word[j].charCodeAt(0) - 'a'.charCodeAt(0)][j]++;
        }
    }

    // Step 2: Initialize DP array
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));
    dp[0].fill(1); // Base case: one way to form the empty target

    // Step 3: Fill DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // Do not use the current column
            dp[i][j] = dp[i][j - 1];

            // Use the current column if the characters match
            const charIdx = target[i - 1].charCodeAt(0) - 'a'.charCodeAt(0);
            if (freq[charIdx][j - 1] > 0) {
                dp[i][j] += dp[i - 1][j - 1] * freq[charIdx][j - 1];
                dp[i][j] %= MOD;
            }
        }
    }

    return dp[m][n];
}

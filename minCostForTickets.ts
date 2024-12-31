function mincostTickets(days: number[], costs: number[]): number {
    const numberOfDays = days.length;
    const lastDay: number = days[numberOfDays - 1];
    const travelDays: Set<number> = new Set(days);

    const dp: number[] = new Array(lastDay + 1).fill(0);

    for (let i = 1; i <= lastDay; i++) {
        if (!travelDays.has(i)) {
            dp[i] = dp[i - 1];
        } else {
            dp[i] = Math.min(
                dp[i - 1] + costs[0],
                dp[Math.max(0, i - 7)] + costs[1],
                dp[Math.max(0, i - 30)] + costs[2]
            )
        }
    }

    return dp[lastDay];
};
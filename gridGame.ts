function gridGame(grid: number[][]): number {
    const n = grid[0].length;

    const prefixRow1: number[] = new Array(n).fill(0);
    const prefixRow2: number[] = new Array(n).fill(0);

    prefixRow1[0] = grid[0][0];
    prefixRow2[0] = grid[1][0];

    for (let i = 1; i < n; i++) {
        prefixRow1[i] = prefixRow1[i - 1] + grid[0][i];
        prefixRow2[i] = prefixRow2[i - 1] + grid[1][i];
    }

    let maxPoints = Infinity;
    for (let col = 0; col < n; col++) {
        const pointsAbove = prefixRow1[n - 1] - prefixRow1[col];
        const pointsBelow = col > 0 ? prefixRow2[col - 1] : 0;
        maxPoints = Math.min(maxPoints, Math.max(pointsAbove, pointsBelow));
    }

    return maxPoints;
};
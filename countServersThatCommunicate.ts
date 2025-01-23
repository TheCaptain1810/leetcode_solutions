function countServers(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    const rowCount: number[] = new Array(m).fill(0);
    const colCount: number[] = new Array(n).fill(0);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                rowCount[i]++;
                colCount[j]++;
            }
        }
    }

    let result = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] && (rowCount[i] > 1 || colCount[j] > 1)) {
                result++;
            }
        }
    }

    return result;
};
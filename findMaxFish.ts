function findMaxFish(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    function dfs(r: number, c: number): number {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) {
            return 0;
        }

        let fish = grid[r][c];
        grid[r][c] = 0; // marking cell (r, c) as visited

        fish += dfs(r - 1, c);
        fish += dfs(r + 1, c);
        fish += dfs(r, c - 1);
        fish += dfs(r, c + 1);

        return fish;
    }

    let maxFish = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            maxFish = Math.max(maxFish, dfs(r, c));
        }
    }
    
    return maxFish;
};
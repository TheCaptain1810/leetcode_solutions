function largestIsland(grid: number[][]): number {
    const n: number = grid.length;
    if (n === 0) return 0;

    let maxArea: number = 0;
    let islandId: number = 2;
    let areaMap: Map<number, number> = new Map();
    areaMap.set(0, 0);

    const directions: [number, number][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const isValid = (x: number, y: number): boolean => (x >= 0 && y >= 0 && x < n && y < n);

    const dfs = (x: number, y: number, id: number): number => {
        let area: number = 1;
        grid[x][y] = id;
        for (const [dx, dy] of directions) {
            let nx: number = x + dx, ny: number = y + dy;
            if (isValid(nx, ny) && grid[nx][ny] === 1) {
                area += dfs(nx, ny, id);
            }
        }
        return area;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                let area: number = dfs(i, j, islandId);
                areaMap.set(islandId, area);
                maxArea = Math.max(maxArea, area);
                islandId++;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                let seen: Set<number> = new Set();
                let area: number = 1;
                for (const [dx, dy] of directions) {
                    let nx: number = i + dx, ny: number = j + dy;
                    if (isValid(nx, ny) && grid[nx][ny] > 1 && !seen.has(grid[nx][ny])) {
                        seen.add(grid[nx][ny]);
                        area += areaMap.get(grid[nx][ny]) || 0;
                    }
                }
                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};
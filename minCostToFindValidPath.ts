function minCost(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;

    const directions: Record<number, [number, number]> = {
        1: [0, 1],
        2: [0, -1],
        3: [1, 0], 
        4: [-1, 0],
    }

    let deque: [number, number, number][] = [];
    deque.push([0, 0, 0]);

    let visited = new Set<string>();

    while (deque.length > 0) {
        const [cost, x, y] = deque.shift()!;

        if (x === m - 1 && y === n - 1) return cost;

        const key = `${x}, ${y}`;
        if (visited.has(key)) continue;
        visited.add(key);

        for (const [sign, [dx, dy]] of Object.entries(directions)) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                const newCost = cost + (grid[x][y] == parseInt(sign) ? 0 : 1);

                if (grid[x][y] == parseInt(sign)) {
                    deque.unshift([newCost, nx, ny]);
                } else {
                    deque.push([newCost, nx, ny]);
                }
            }
        }
    }

    return -1;
};
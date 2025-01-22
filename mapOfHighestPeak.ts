function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length;
    const n = isWater[0].length;

    const heights: number[][] = Array.from({ length: m }, () => Array(n).fill(-1));
    const queue: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                heights[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const directions: [number, number][] = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    let front = 0;
    while (front < queue.length) {
        const [x, y] = queue[front++];

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && heights[nx][ny] === -1) {
                heights[nx][ny] = heights[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    return heights;
};
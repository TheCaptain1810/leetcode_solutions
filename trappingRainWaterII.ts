function trapRainWater(heightMap: number[][]): number {
    const m = heightMap.length;
    const n = heightMap[0].length;
    if (m < 3 || n < 3) return 0; // No water can be trapped if grid is too small

    const minHeap: [number, number, number][] = []; // [height, row, col]
    const visited: boolean[][] = Array.from({ length: m }, () => Array(n).fill(false));
    const directions: [number, number][] = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let trappedWater = 0;

    // Push all boundary cells into the heap
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                minHeap.push([heightMap[i][j], i, j]);
                visited[i][j] = true;
            }
        }
    }

    // Min-heapify the heap (sort by height)
    minHeap.sort((a, b) => a[0] - b[0]);

    while (minHeap.length > 0) {
        const [height, x, y] = minHeap.shift()!;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;

                // If the neighbor's height is lower than the current height, water can be trapped
                trappedWater += Math.max(0, height - heightMap[nx][ny]);

                // Add the neighbor to the heap with the updated height
                minHeap.push([Math.max(height, heightMap[nx][ny]), nx, ny]);
                minHeap.sort((a, b) => a[0] - b[0]); // Maintain heap property
            }
        }
    }

    return trappedWater;
};
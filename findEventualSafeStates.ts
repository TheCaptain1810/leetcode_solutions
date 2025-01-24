function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;

    const reversedGraph: number[][] = Array.from({ length: n }, () => []);
    const inDegree: number[] = Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reversedGraph[neighbor].push(i);
            inDegree[i]++;
        }
    }

    const queue: number[] = [];
    const safeNodes: number[] = [];

    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const node = queue.shift();
        safeNodes.push(node);

        for (const neighbor of reversedGraph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return safeNodes.sort((a, b) => a - b);
};
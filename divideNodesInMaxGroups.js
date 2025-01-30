var magnificentSets = function(n, edges) {
    const adj = Array.from({ length: n + 1 }, () => []);
    
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const color = Array(n + 1).fill(0);
    const groups = [];
    
    // Check if the graph is bipartite
    function isBipartite(start) {
        const queue = [start];
        color[start] = 1;
        const component = [start];

        while (queue.length) {
            const node = queue.shift();
            for (const neighbor of adj[node]) {
                if (color[neighbor] === 0) {
                    color[neighbor] = -color[node];
                    queue.push(neighbor);
                    component.push(neighbor);
                } else if (color[neighbor] === color[node]) {
                    return null; // Found an odd-length cycle
                }
            }
        }
        return component;
    }

    // BFS to find the maximum level depth
    function bfsMaxDepth(start) {
        let maxDepth = 0;
        let queue = [start];
        const visited = new Set([start]);

        while (queue.length) {
            maxDepth++;
            let nextQueue = [];
            for (const node of queue) {
                for (const neighbor of adj[node]) {
                    if (!visited.has(neighbor)) {
                        visited.add(neighbor);
                        nextQueue.push(neighbor);
                    }
                }
            }
            queue = nextQueue;
        }
        return maxDepth;
    }

    // Find connected components and check bipartiteness
    for (let i = 1; i <= n; i++) {
        if (color[i] === 0) {
            const component = isBipartite(i);
            if (!component) return -1;
            groups.push(component);
        }
    }

    let result = 0;

    // Compute the max group count per component
    for (const group of groups) {
        let maxGroups = 0;
        for (const node of group) {
            maxGroups = Math.max(maxGroups, bfsMaxDepth(node));
        }
        result += maxGroups;
    }

    return result;
};

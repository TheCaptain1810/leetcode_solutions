/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  // Step 1: Build adjacency list
  let graph = Array.from({ length: n }, () => new Set());
  for (let [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }

  let visited = new Array(n).fill(false);
  let count = 0;

  // Step 2: Traverse the graph to find connected components
  const dfs = (node, component) => {
    visited[node] = true;
    component.push(node);
    for (let neighbor of graph[node]) {
      if (!visited[neighbor]) {
        dfs(neighbor, component);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let component = [];
      dfs(i, component);

      // Step 3: Check if the component is complete
      let size = component.length;
      let expectedEdges = (size * (size - 1)) / 2;
      let actualEdges = 0;

      for (let node of component) {
        actualEdges += graph[node].size;
      }
      actualEdges /= 2; // Each edge is counted twice

      if (actualEdges === expectedEdges) {
        count++;
      }
    }
  }

  return count;
};

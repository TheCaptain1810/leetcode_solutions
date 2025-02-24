/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const n = amount.length;
  const tree = Array.from({ length: n }, () => []);

  // Build the tree
  for (const [u, v] of edges) {
    tree[u].push(v);
    tree[v].push(u);
  }

  // Step 1: Compute parent and depth arrays using DFS from node 0.
  const parent = new Array(n).fill(-1);
  const depth = new Array(n).fill(0);

  function dfs(node, par) {
    parent[node] = par;
    for (const nei of tree[node]) {
      if (nei === par) continue;
      depth[nei] = depth[node] + 1;
      dfs(nei, node);
    }
  }
  dfs(0, -1);

  // Step 2: Compute Bob's arrival times along his unique path from bob to 0.
  // For nodes not on the path, bobTime remains Infinity.
  const bobTime = new Array(n).fill(Infinity);
  let t = 0;
  let cur = bob;
  while (cur !== -1) {
    bobTime[cur] = t;
    cur = parent[cur];
    t++;
  }

  // Step 3: DFS for Alice from node 0 to each leaf.
  let maxProfit = -Infinity;

  function dfsAlice(node, par, time, currProfit) {
    // Adjust profit based on arrival times.
    if (time < bobTime[node]) {
      currProfit += amount[node];
    } else if (time === bobTime[node]) {
      currProfit += amount[node] / 2;
    }

    // If it's a leaf (and not the root), update maxProfit.
    if (node !== 0 && tree[node].length === 1) {
      maxProfit = Math.max(maxProfit, currProfit);
    }

    // Continue exploring children.
    for (const nei of tree[node]) {
      if (nei === par) continue;
      dfsAlice(nei, node, time + 1, currProfit);
    }
  }

  dfsAlice(0, -1, 0, 0);
  return maxProfit;
};

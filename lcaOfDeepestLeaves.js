/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var lcaDeepestLeaves = function (root) {
  const dfs = (node, depth) => {
    if (!node) {
      return { depth: depth - 1, lca: null };
    }

    const left = dfs(node.left, depth + 1);
    const right = dfs(node.right, depth + 1);

    if (left.depth === right.depth) {
      return { depth: left.depth, lca: node };
    } else if (left.depth > right.depth) {
      return { depth: left.depth, lca: left.lca };
    } else {
      return { depth: right.depth, lca: right.lca };
    }
  };

  return dfs(root, 0).lca;
};

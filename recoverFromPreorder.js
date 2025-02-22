/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  let stack = [];
  let i = 0;

  while (i < traversal.length) {
    // Count dashes to determine the depth
    let depth = 0;
    while (i < traversal.length && traversal[i] === "-") {
      depth++;
      i++;
    }

    // Read the node value
    let start = i;
    while (i < traversal.length && traversal[i] !== "-") {
      i++;
    }
    let val = parseInt(traversal.substring(start, i));

    // Create new node
    let node = new TreeNode(val);

    // Adjust the stack to the correct depth
    while (stack.length > depth) {
      stack.pop();
    }

    // Attach the node to its parent
    if (stack.length > 0) {
      let parent = stack[stack.length - 1];
      if (!parent.left) {
        parent.left = node;
      } else {
        parent.right = node;
      }
    }

    // Push the current node onto the stack
    stack.push(node);
  }

  return stack[0]; // Root of the tree
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  if (!preorder.length) return null;

  let root = new TreeNode(preorder[0]);
  if (preorder.length === 1) return root;

  let leftRootVal = preorder[1];
  let leftSubtreeSize = postorder.indexOf(leftRootVal) + 1;

  root.left = constructFromPrePost(
    preorder.slice(1, leftSubtreeSize + 1),
    postorder.slice(0, leftSubtreeSize)
  );

  root.right = constructFromPrePost(
    preorder.slice(leftSubtreeSize + 1),
    postorder.slice(leftSubtreeSize, -1)
  );

  return root;
};

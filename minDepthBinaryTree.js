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
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0;

  let queue = [[root, 1]]; // nodes along with their depths

  while (queue.length > 0) {
    let [node, depth] = queue.shift();
    if (node.left === null && node.right === null) return depth;

    if (node.left !== null) queue.push([node.left, depth + 1]);
    if (node.right !== null) queue.push([node.right, depth + 1]);
  }
};

// C++ version if you want, cause who doesn't?!

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
// class Solution {
//     public:
//         int minDepth(TreeNode* root) {
//             if (root == nullptr) return 0;

//             queue<pair<TreeNode*, int>> q; // nodes along with their depths
//             q.push({root, 1});

//             while(!q.empty()) {
//                 auto [node, depth] = q.front();
//                 q.pop();

//                 if (node->left == nullptr && node->right == nullptr) return depth;

//                 if (node->left != nullptr) q.push({node->left, depth + 1});
//                 if (node->right != nullptr) q.push({node->right, depth + 1});
//             }

//             return -1;
//         }
//     };

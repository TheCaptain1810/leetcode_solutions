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
class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        vector<vector<int>> result;

        if (!root) return result;
        
        vector<TreeNode*> queue;
        queue.push_back(root);

        while (queue.size() > 0) {
            vector<int> level;
            int size = queue.size();

            for (int i = 0; i < size; i++) {
                TreeNode* node = queue.front();
                queue.erase(queue.begin());
                level.push_back(node->val);

                if (node->left) queue.push_back(node->left);
                if (node->right) queue.push_back(node->right);
            }

            result.push_back(level);   
        }

        return result;
    }
};
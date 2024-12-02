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
class Solution
{
private:
    void findPaths(TreeNode *node, vector<string> &possiblePaths, string path)
    {
        path += to_string(node->val);

        if (!node->left && !node->right)
        {
            possiblePaths.push_back(path);
        }
        else
        {
            if (node->left)
                findPaths(node->left, possiblePaths, path + "->");
            if (node->right)
                findPaths(node->right, possiblePaths, path + "->");
        }
    }

public:
    vector<string> binaryTreePaths(TreeNode *root)
    {
        vector<string> possiblePaths;
        if (!root)
            return possiblePaths;

        findPaths(root, possiblePaths, "");
        return possiblePaths;
    }
};
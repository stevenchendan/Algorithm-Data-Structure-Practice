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
 * @return {number[]}
 */
const inorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const result = [];

  const dfs = function (root) {
    if (!root) {
      return [];
    }
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  };
  dfs(root);

  return result;
};

/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
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
// // solution 1: recursive
const maxDepth = function (root) {
  if (!root) {
    return root;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

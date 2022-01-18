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
// solution 2:
const maxDepth = function (root) {
  if (root === null) {
    return root;
  }

  const getDepth = function getMaxDepthFromTree(node) {
    if (node === null) {
      return 0;
    }
    let leftDepth = getDepth(node.left);
    let rightDepth = getDepth(node.right);
    let result = 1 + Math.max(leftDepth, rightDepth);
    return result;
  };

  return getDepth(root);
};

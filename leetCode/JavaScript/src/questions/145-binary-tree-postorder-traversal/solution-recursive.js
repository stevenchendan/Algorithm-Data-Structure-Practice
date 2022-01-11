/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
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
const postorderTraversal = function (root, result = []) {
  if (!root) {
    return [];
  }

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);
  result.push(root.val);

  return result;
};

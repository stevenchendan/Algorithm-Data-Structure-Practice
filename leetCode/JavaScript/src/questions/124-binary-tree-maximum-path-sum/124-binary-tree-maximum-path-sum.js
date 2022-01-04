/**
 * Question: https://leetcode.com/problems/binary-tree-maximum-path-sum/
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
const maxPathSum = function (root) {
  if (root == null) {
    return 0;
  }

  let maxSum = Number.MIN_SAFE_INTEGER;

  const maxPath = (root) => {
    if (root == null) {
      return 0;
    }

    let maxLeft = Math.max(maxPath(root.left), 0);
    let maxRight = Math.max(maxPath(root.right), 0);
    let innerMax = maxLeft + root.val + maxRight;

    maxSum = Math.max(innerMax, maxSum);

    let outputMax = root.val + Math.max(maxLeft, maxRight);

    return outputMax;
  };

  maxPath(root);
  return maxSum;
};

export default maxPathSum;

/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * recurtion
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  const result = [];
  const queue = [root];

  if (!root) {
    return result;
  }

  while (queue.length !== 0) {
    const { length } = queue;
    const currentLevel = [];

    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currentLevel);
  }

  return result;
};

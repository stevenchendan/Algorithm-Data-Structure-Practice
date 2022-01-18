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
// Solution 3 bfs template solution
const maxDepth = function (root) {
  if (root === null) {
    return null;
  }

  let depth = 0;
  const queue = [root];

  while (queue.length) {
    const length = queue.length;
    depth++;

    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  return depth;
};

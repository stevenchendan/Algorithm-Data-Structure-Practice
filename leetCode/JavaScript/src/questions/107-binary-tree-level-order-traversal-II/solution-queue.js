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
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  const result = [];
  const queue = [root];

  while (queue.length !== 0) {
    const { length } = queue;
    const currentLevel = [];
    for (let i = 0; i < length; i++) {
      const cur = queue.shift();
      currentLevel.push(cur);
    }
    result.push(currentLevel);
  }

  return result.reverse();
};

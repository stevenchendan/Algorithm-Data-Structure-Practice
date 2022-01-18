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
const largestValues = function (root) {
  if (!root) {
    return [];
  }

  let result = [],
    queue = [root];

  while (queue.length) {
    let max = queue[0].val;
    let length = queue.length;
    while (length--) {
      let currentNode = queue.shift();
      if (max < currentNode.val) {
        max = currentNode.val;
      }
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    result.push(max);
  }

  return result;
};

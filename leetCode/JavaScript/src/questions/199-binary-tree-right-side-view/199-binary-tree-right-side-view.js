/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
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
var rightSideView = function (root) {
  if (root === null) {
    return [];
  }
  let result = [],
    queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    let length = queue.length;
    const curLevel = [];
    while (length--) {
      const cur = queue.shift();
      curLevel.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    result.push(curLevel);
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].pop();
  }
  return result;
};

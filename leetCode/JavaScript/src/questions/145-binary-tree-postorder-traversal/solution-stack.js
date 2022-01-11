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
const postorderTraversal = function (root, result = []) {
  if (!root) {
    return [];
  }

  const stack = [root];
  let cur = null;

  do {
    cur = stack.pop();
    result.push(cur.val);

    if (cur.left) {
      stack.push(cur.left);
    }
    if (cur.right) {
      stack.push(cur.right);
    }
  } while (stack.length);

  return result.reverse();
};

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

  const result = [];

  const bfs = function (root, depth) {
    if (root !== null) {
      if (result[depth] === null || root.val > result[depth]) {
        result[depth] = root.val;
      }

      if (root.left) {
        bfs(root.left, depth + 1);
      }
      if (root.right) {
        bfs(root.right, depth + 1);
      }
    }
  };
  bfs(root, 0);

  return result;
};

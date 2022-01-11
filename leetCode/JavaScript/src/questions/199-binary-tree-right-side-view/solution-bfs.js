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
const rightSideView = function (root) {
  if (!root) {
    return [];
  }

  const result = [];

  const bfs = function (root, depth) {
    console.log(root);
    if (root !== null) {
      if (!result[depth]) {
        result[depth] = [];
      }

      result[depth].push(root.val);
      bfs(root.left, depth + 1);
      bfs(root.right, depth + 1);
    }
  };
  bfs(root, 0);

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i][result[i].length - 1];
  }

  return result;
};

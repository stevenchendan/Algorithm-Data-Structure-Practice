/**
 * https://leetcode.com/problems/binary-tree-paths/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  if (!root) {
    return root;
  }

  // dfs
  const result = [];
  const getPath = function (node, path) {
    if (node.left === null && node.right === null) {
      path += node.val;
      result.push(path);
      return;
    }
    path += `${node.val}->`;
    if (node.left) {
      getPath(node.left, path);
    }
    if (node.right) {
      getPath(node.right, path);
    }
  };

  getPath(root, '');

  return result;
};

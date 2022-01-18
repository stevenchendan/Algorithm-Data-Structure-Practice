/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */

const levelOrder = function (root) {
  if (root === null) {
    return [];
  }
  const result = [];

  const bfs = function (root, depth) {
    if (root !== null) {
      if (result[depth] == null) {
        result[depth] = [];
      }
      result[depth].push(root.val);
      for (let item of root.children) {
        if (item !== null) {
          bfs(item, depth + 1);
        }
      }
    }
  };
  bfs(root, 0);

  return result;
};

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

  const result = [],
    queue = [root];

  while (queue.length && root !== null) {
    let length = queue.length;
    let currentLevel = [];
    while (length--) {
      let currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      for (let item of currentNode.children) {
        if (item) {
          queue.push(item);
        }
      }
    }
    result.push(currentLevel);
  }

  return result;
};

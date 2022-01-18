/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// iteration solution
const connect = function (root) {
  if (root === null) {
    return null;
  }

  const queue = [root];

  while (queue.length) {
    const length = queue.length;

    for (let i = 0; i < length; i++) {
      const current = queue.shift();
      if (i < length - 1) {
        current.next = queue[0];
      } else {
        current.next = null;
      }

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }

  return root;
};

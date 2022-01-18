/**
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
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

const connect = function (root) {
  if (root == null) {
    return root;
  }

  const queue = [root];

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let cur = queue.shift();
      if (i < length - 1) {
        cur.next = queue[0];
      } else {
        cur.next = null;
      }

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
  }

  return root;
};

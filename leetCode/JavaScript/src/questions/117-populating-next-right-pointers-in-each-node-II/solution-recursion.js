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
// recursion solution
const connect = function (root) {
  if (root === null) return null;

  if (root.left !== null) {
    if (root.right !== null) {
      root.left.next = root.right;
    } else {
      root.left.next = help(root);
    }
  }

  if (root.right !== null) {
    root.right.next = help(root);
  }

  connect(root.right);
  connect(root.left);

  return root;
};

function help(root) {
  root = root.next;
  while (root) {
    if (root.left !== null) return root.left;
    if (root.right !== null) return root.right;
    root = root.next;
  }
  return null;
}

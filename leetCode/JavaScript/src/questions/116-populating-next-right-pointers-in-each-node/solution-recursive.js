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
//bfs solution
const connect = function (root) {
  if (root == null || root.left == null) {
    return root;
  }
  //same parent
  root.left.next = root.right;
  //different parent (given upper level has been connected already so that we can use root.next.left)
  root.right.next = root.next ? root.next.left : null;
  connect(root.left);
  connect(root.right);

  return root;
};

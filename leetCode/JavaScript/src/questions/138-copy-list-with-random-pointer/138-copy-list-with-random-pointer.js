/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  if (!head) {
    return null;
  }
  const m = new Map();
  let node = head;
  while (node) {
    m.set(node, new Node(node.val));
    node = node.next;
  }
  node = head;
  while (node) {
    m.get(node).next = node.next ? m.get(node.next) : null;
    m.get(node).random = node.random ? m.get(node.random) : null;
    node = node.next;
  }
  return m.get(head);
};

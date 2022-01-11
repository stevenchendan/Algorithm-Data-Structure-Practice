/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (!head) {
    return false;
  }
  seen = new Set();
  while (head) {
    if (seen.has(head)) {
      return true;
    }
    seen.add(head);
    head = head.next;
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  const arr = [];
  let p;

  while (head) {
    p = head.next;
    head.next = null;
    arr.push(head);
    head = p;
  }

  let [left, right] = [0, arr.length - 1];
  while (left < right) {
    arr[left].next = arr[right];
    if (left + 1 !== right) {
      arr[right].next = arr[left + 1];
    }
    left++;
    right--;
  }
  return arr[0];
};

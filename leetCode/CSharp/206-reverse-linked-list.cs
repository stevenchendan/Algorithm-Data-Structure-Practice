/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode ReverseList(ListNode head) {
        if (head == null) {
            return null;
        }
        // two pointer
        ListNode result = null;
        while (head != null) {
            ListNode cur = head;
            head = head.next;
            cur.next = result;
            result = cur;
        }
        return result;
    }
}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public bool HasCycle(ListNode head) {
        HashSet<ListNode> seen = new HashSet<ListNode>();
        if (head == null) {
            return false;
        }
        while (head != null) {
            if (seen.Contains(head)) {
                return true;
            }
            seen.Add(head);
            head = head.next;
        }
        return false;
    }
}
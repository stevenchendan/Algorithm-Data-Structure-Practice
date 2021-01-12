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
    public ListNode SwapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }
        ListNode dummyHead = new ListNode(0);
        dummyHead.next = head;
        ListNode temp = dummyHead;
        while (head != null && head.next != null) {
            // declaration of the first and second node
            ListNode first_node = head;
            ListNode second_node = head.next;
            
            //swapping
            temp.next = second_node;
            first_node.next = second_node.next;
            second_node.next = first_node;
            
            //reinitializing
            temp = first_node;
            head = first_node.next;
        }
        return dummyHead.next;
    }
}
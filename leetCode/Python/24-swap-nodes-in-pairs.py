# https://leetcode.com/problems/swap-nodes-in-pairs/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        # recursive
        # if not head or not head.next:
        #     return head
        # tmp = head.next
        # head.next = self.swapPairs(head.next.next)
        # tmp.next = head
        # return tmp
        
        
        # iterative
        # create dummy node point to head
        dummy = ListNode(-1)
        dummy.next = head
        
        prev_node = dummy
        
        while head and head.next:
            
            first_node = head
            second_node = head.next
        
            # swap
            prev_node.next = second_node
            first_node.next = second_node.next
            second_node.next = first_node
        
            # prepare for next swap
            prev_node = first_node
            head = first_node.next
            
        return dummy.next
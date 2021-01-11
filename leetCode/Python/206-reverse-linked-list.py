# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        # iteratively(two pointer)
        prev = None
        while head:
            cur = head
            head = head.next
            cur.next = prev
            prev = cur
        return prev 
        
        # recursively
        # if head == None or head.next == None:
        #     return head
        # ans = self.reverseList(head.next)
        # # this is hard to understand
        # head.next.next = head
        # head.next = None
        # return ans
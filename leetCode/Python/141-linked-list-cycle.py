# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        # fast and slow pointer
        # if not head:
        #     return False
        # slow = fast = head
        # while fast != None and fast.next != None:
        #     fast = fast.next.next
        #     slow = slow.next
        #     if slow == fast:
        #         return True
        # return False
        
        # hashtable
        if not head:
            return False
        seen = set()
        while head:
            if head in seen:
                return True
            seen.add(head)
            head = head.next        
        return False
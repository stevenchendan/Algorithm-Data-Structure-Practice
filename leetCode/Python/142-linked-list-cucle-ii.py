# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        # hashtable
#         visited = set()
#         node = head
#         while node is not None:
#             if node in visited:
#                 return node
#             else:
#                 visited.add(node)
#                 node = node.next
#         return None
        
        # two pointer
        slow = fast = head
        while fast is not None and fast.next is not None:
            slow = slow.next
            fast = fast.next.next
            if fast == slow:
                slow = head
                while slow != fast:
                    slow = slow.next
                    fast = fast.next
                return fast
        return None
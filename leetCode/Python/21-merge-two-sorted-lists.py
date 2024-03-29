# https://leetcode.com/problems/merge-two-sorted-lists/
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
        
        # if None in (l1, l2):
        #     return l1 or l2
        # dummy = current = ListNode(0)
        # while l1 and l2:
        #     if l1.val < l2.val:
        #         current.next = l1
        #         l1 = l1.next
        #     else:
        #         current.next = l2
        #         l2 = l2.next
        #     current = current.next
        # current.next = l1 or l2
        # return dummy.next

        # in-place, iteratively        
        # if None in (l1, l2):
        #     return l1 or l2
        # dummy = cur = ListNode(0)
        # dummy.next = l1
        # while l1 and l2:
        #     if l1.val < l2.val:
        #         l1 = l1.next
        #     else:
        #         nxt = cur.next
        #         cur.next = l2
        #         tmp = l2.next
        #         l2.next = nxt
        #         l2 = tmp
        #     cur = cur.next
        # cur.next = l1 or l2
        # return dummy.next
# https://leetcode.com/problems/binary-tree-preorder-traversal/

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        #recursive
        # if not root:
        #     return []
        # return [root.val] + self.preorderTraversal(root.left) + self.preorderTraversal(root.right)
    
        #iterative:
        if not root:
            return []
        cur, stack, result = root, [], []
        while cur or stack:
            # add root and left node into result(final result) and stack(temporary storage)
            # if there is not left node end this looping
            while cur: 
                # add val to result list
                result.append(cur.val)
                # add node to stack
                stack.append(cur)
                # move to the left root
                cur = cur.left
            # move the last item out of the stack
            temp = stack.pop()
            # set cur to be right node if there is no right node then keep poping out the last item until there is a right child node
            cur = temp.right
        return result
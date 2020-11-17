# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        # inorder: left, root, right
        # data structure use recursive
        if not root:
            return []
        # only concatenate list to list
        return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)
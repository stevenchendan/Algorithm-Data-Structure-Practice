# https://leetcode.com/problems/n-ary-tree-postorder-traversal/
"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if root is None:
            return []
        
        # recursive
        """
# Definition for a Node.[Photo]
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        if root is None:
            return []
        
        # recursive
        result = []
        for i in root.children:
            result.extend(self.postorder(i))
        return result + [root.val]
        
        # stack = [root]
        # result = []
        # while stack:
        #     node = stack.pop()
        #     result.append(node.val)
        #     stack.extend(node.children)
        # return result[::-1]
        
        
        
#         stack, output = [root, ], []
#         while stack:
#             root = stack.pop()
#             if root is not None:
#                 output.append(root.val)
#             for c in root.children:
#                 stack.append(c)
#         return output[::-1]
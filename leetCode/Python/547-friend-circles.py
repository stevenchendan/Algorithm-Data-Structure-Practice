class Solution:
    def __init__(self):
        self.tree_num = 0 
        self.tree_node = [] 
        self.parent = [] 
    def initialize_tree(self, total_node):
        self.tree_num = total_node
        self.tree_node = [1] * total_node
        self.parent = [i for i in range(total_node)]

    def union(self, node_i, node_j):
        root_i = self.find(node_i)
        root_j = self.find(node_j)
        if root_i == root_j:
            return
        if self.tree_node[root_i] > self.tree_node[root_j]:
            self.parent[root_j] = root_i
            self.tree_node[root_i] += self.tree_node[root_j]
        else:
            self.parent[root_i] = root_j
            self.tree_node[root_j] += self.tree_node[root_i]
        self.tree_num -= 1

    def find(self, node):
        while self.parent[node] != node:
            self.parent[node] == self.parent[self.parent[node]]
            node = self.parent[node]
        return node

    def findCircleNum(self, M):
        self.initialize_tree(len(M))
        for i in range(len(M)):
            for j in range(i):
                if M[i][j] == 1:
                    self.union(i, j)
        return self.tree_num
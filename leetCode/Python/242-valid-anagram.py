#Solution 1 hash table
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # if not same length return False
        if len(s) != len(t):
            return False
        count = {}
        for char in s:
            if char in count:
                count[char] += 1
            else:
                count[char] = 1
        for char in t:
            if char in count:
                count[char] -= 1
            else:
                count[char] = 1
        for value in count.values():
            if value != 0:
                return False
        return True

# solution 2 with two loop and dictionary
class Solution2:
    def isAnagram(self, s: 'str', t: 'str') -> 'bool':
        # solution use dictionary
        if len(s) != len(t):
            return False
        dic = {}
        for i in s:
            if i in dic:
                dic[i] += 1
            else:
                dic[i] = 1
        for j in t:
            if j not in dic:
                return False
            else:
                dic[j] -= 1
                if dic[j] < 0:
                    return False
        return True
        
        
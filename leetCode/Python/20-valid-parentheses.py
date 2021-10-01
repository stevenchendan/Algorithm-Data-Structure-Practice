class Solution:
    def isValid(self, s: str) -> bool:
        # second time
        if not s or len(s) % 2 != 0:
            return False
        parentheses = {')':'(', '}':'{', ']':'['}
        seen = []
        for char in s:
            if char in parentheses.values():
                seen.append(char)
            elif char in parentheses.keys():
                if seen == [] or parentheses[char] != seen[-1]:
                    return False
                seen.pop()
            else:
                return False
        return len(seen) == 0


    
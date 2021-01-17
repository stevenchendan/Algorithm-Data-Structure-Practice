class Solution:
    def isValid(self, s: str) -> bool:
        # stack and dictionary solution
        parentheses = {')':'(', ']':'[', '}':'{'}
        seen = []
        for char in s:
            # adding to seen stack if it is is in key value
            if char in parentheses.values():
                seen.append(char)
            elif char in parentheses.keys():
                if seen == [] or parentheses[char] != seen.pop():
                    return False
            else:
                return False
        return seen == []
class Solution:
    def decodeString(self, s: str) -> str:
        if not s:
            return ""
        
        # brute force
        stack = []
        currentNum = 0
        currentStr = ""
        for i in s:
            if i == "[":
                stack.append(currentStr)
                stack.append(currentNum)
                currentStr = ""
                currentNum = 0
            elif i == "]":
                num = stack.pop()
                prevStr = stack.pop()
                currentStr = prevStr + num*currentStr
            elif i.isdigit():
                currentNum = currentNum * 10 + int(i)
            else:
                currentStr += i
        return currentStr
class Solution:
    def reverseWords(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        self.reverseWord(s, 0, len(s) - 1)
        left = 0
        for i in range(len(s)):
            if s[i] == " ":
                self.reverseWord(s, left, i - 1)
                left = i + 1
            elif i == len(s) - 1:
                self.reverseWord(s, left, i)
        
    def reverseWord(self, s, start, end) -> None:
        while start < end:
            s[start], s[end] = s[end], s[start]
            start += 1
            end -= 1
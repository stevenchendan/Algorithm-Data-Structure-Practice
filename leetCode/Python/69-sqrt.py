# https://leetcode.com/problems/sqrtx/

class Solution:
    def mySqrt(self, x: int) -> int:
        i = 0
        while i * i <= x:
          if i * i <= x and (i + 1) * (i + 1) > x:
            return i
          else:
            i += 1

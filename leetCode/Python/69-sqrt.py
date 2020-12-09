# https://leetcode.com/problems/sqrtx/
# Solution 1: brute force
class Solution1:
    def mySqrt(self, x: int) -> int:
        i = 0
        while i * i <= x:
          if i * i <= x and (i + 1) * (i + 1) > x:
            return i
          else:
            i += 1

# solution 2: binary search
# time complexity: O(logx)
# space complexity: O(1)
class Solution2:
    def mySqrt(self, x: int) -> int:
      left, right, result = 0, x, -1
      while left <= right:
          mid = (left + right) // 2
          if mid * mid <= x:
              result = mid
              left = mid + 1
          else:
              right = mid - 1
      return result

# solution 3: binary search but more understandable
# time complexity: O(logx)
# space complexity: O(1)
class Solution3:
    def mySqrt(self, x: int) -> int:
        if x < 0:
            return null
        left, right, result = 0, x, -1
        while left <= right:
            mid = left + (right - left) // 2
            if mid * mid == x:
                return mid
            elif mid * mid < x:
                left = mid + 1
            elif mid * mid > x:
                right = mid - 1
        return right


#Solution 4: newton
        if x < 0:
            raise Exception("Cannot be negative")
        if x == 0:
            return 0
        cur = 1
        while True:
            pre = cur
            cur = (cur + x / cur) / 2
            if abs(cur - pre) < 1e-6:
                return int(cur)
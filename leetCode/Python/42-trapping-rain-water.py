# https://leetcode.com/problems/trapping-rain-water/
# best explanation 
# https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/




# Solutions 2 two for loop
class Solution2:
    def trap(self, height: List[int]) -> int:
        # handle edge cases
        if not height:
            return 0

        length = len(height)
        max_left = [0] * length
        max_right = [0] * length
        result = 0
        
        max_left[0] = height[0]
        max_right[length - 1] = height[-1]
        for i in range(1, length):
            max_left[i] = max(height[i], max_left[i - 1])
        for j in range(length - 2, -1, -1):
            max_right[j] = max(height[j], max_right[j + 1])
        for i in range(length):
            if min(max_left[i], max_right[i]) > height[i]:
                result += min(max_left[i], max_right[i]) - height[i]
        return result

class Solution:
    def maxArea(self, height: List[int]) -> int:
        # brute force
        # if not height:
        #     return 0
        # max = 0
        # area = 0
        # for i in range(len(height) - 1):
        #     for j in range(len(height)):
        #         # get area
        #         area = min(height[j], height[i]) * (j - i)
        #         if area > max:
        #             max = area
        # return max
    
        # two pointer
        maxArea = 0
        left = 0
        right = len(height) - 1
        while left != right:
            maxArea = max(maxArea, min(height[left], height[right]) * (right - left))
            if height[left] <= height[right]:
                left += 1
            else:
                right -= 1
        return maxArea


# Thinking for two pointer
# only move the short pointer
# 
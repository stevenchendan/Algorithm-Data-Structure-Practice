# https://leetcode.com/problems/move-zeroes/
class Solution:
    def moveZeroes(self, nums: 'List[int]') -> 'None':
        """
        Do not return anything, modify nums in-place instead.
        """
        # two pointer switch
        # i = 0
        # for j in range(len(nums)):
        #     if (nums[j] == 0):
        #         continue
        #     else:
        #         nums[i], nums[j] = nums[j], nums[i]
        #         i += 1
        
        # two pointer pop and append
        i = 0
        j = len(nums)
        while i < j:
            if (nums[i] == 0):
                nums.append(0)
                nums.pop(i)
                j -= 1
            else:
                i += 1

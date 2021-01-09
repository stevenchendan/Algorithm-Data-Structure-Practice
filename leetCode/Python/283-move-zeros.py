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
        # i = 0
        # j = len(nums)
        # while i < j:
        #     if (nums[i] == 0):
        #         nums.append(0)
        #         nums.pop(i)
        #         j -= 1
        #     else:
        #         i += 1

        # one pass
        # if not nums or len(nums) == 0:
        #     return None
        # slow = 0
        # for fast in range(len(nums)):
        #     if nums[fast] != 0:
        #         nums[fast], nums[slow] = nums[slow], nums[fast]
        #         slow += 1

        # two pass -- append zero
        j = 0
        for i in range(len(nums)):
            if nums[i] != 0:
                nums[j] = nums[i]
                j += 1
        for i in range(j, len(nums)):
            nums[i] = 0
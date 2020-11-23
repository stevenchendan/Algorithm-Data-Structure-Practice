# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    def removeDuplicates(self, nums: 'List[int]') -> 'int':
        # solution 1
        # if not nums:
        #     return 0
        # elif len(nums) == 1:
        #     return 1
        # index = 0
        # for num in nums:
        #     if index < 1 or num != nums[index - 1]:
        #         nums[index] = num
        #         index += 1
        # return index

        # solution 2 two pointer
        if not nums:
          return 0
        i = 0
        for j in range(1, len(nums)):
          if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]
        return i + 1

    
    
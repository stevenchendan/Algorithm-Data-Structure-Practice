# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    def removeDuplicates(self, nums: 'List[int]') -> 'int':
        if not nums:
            return 0
        elif len(nums) == 1:
            return 1
        index = 0
        for num in nums:
            if index < 1 or num != nums[index - 1]:
                nums[index] = num
                index += 1
        return index
    
    
    
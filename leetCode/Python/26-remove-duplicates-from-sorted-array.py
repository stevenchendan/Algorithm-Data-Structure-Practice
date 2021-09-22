# https://leetcode.com/problems/remove-duplicates-from-sorted-array/

class Solution:
    def removeDuplicates(self, nums: 'List[int]') -> 'int':
        # solution 1
        # time complexity: O(n)
        # space complexity: O(1)
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
        # time complexity: O(n)
        # space complexity: O(1)
        # if not nums:
        #   return 0
        # i = 0
        # for j in range(1, len(nums)):
        #   if nums[j] != nums[i]:
        #     i += 1
        #     nums[i] = nums[j]
        # return i + 1

        # solution 3: two pointer
        # time: O(n)
        # space complex: O(1)
        if not nums:
            return 0
        length = len(nums)
        fast = slow = 1
        while fast < length:
            if nums[fast] != nums[fast - 1]:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow
    
class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        # hash table solution with enumerate
        # if not nums or len(nums) < 2:
        #     return []
        # dict = {}
        # for i, num in enumerate(nums):
        #     if num in dict:
        #         return [dict[num], i]
        #     else:
        #         dict[target - num] =  i
                
        # hash table solution without enumerate
        if len(nums) < 2:
            return []
        dict = {}
        for i in range(len(nums)):
            if nums[i] in dict:
                return [dict[nums[i]], i]
            else:
                dict[target - nums[i]] = i
        return []
            
        # brute force two pass
        # if not nums:
        #     return []
        # for i in range(len(nums)):
        #     for j in range(i + 1, len(nums)):
        #         if nums[i] + nums[j] == target:
        #             return [i, j]
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # two pointer
        # res = []
        # length = len(nums)
        # if not nums or length < 3:
        #     return res
        # nums.sort()
        # for i in range(length):
        #     if nums[i] > 0:
        #         return res
        #     if (i > 0 and nums[i] == nums[i - 1]):
        #         continue
        #     left = i + 1
        #     right = length - 1
        #     while left < right:
        #         if nums[i] + nums[left] + nums[right] == 0:
        #             res.append([nums[i], nums[left], nums[right]])
        #             while (left < right and nums[left] == nums[left+1]):
        #                 left += 1
        #             while (left < right and nums[right] == nums[right-1]):
        #                 right -= 1
        #             right -= 1
        #         elif nums[i] + nums[left] + nums[right] > 0:
        #             right -= 1
        #         else:
        #             left += 1
        # return res
                    
        # hashset
        res = []
        nums.sort()
        for i in range(len(nums)):
            if nums[i] > 0:
                break
            if i == 0 or nums[i - 1] != nums[i]:
                self.twoSum(nums, i, res)
        return res
        
    def twoSum(self, nums: List[int], i: int, res: List[List[int]]):
        seen = set()
        j = i + 1
        while j < len(nums):
            complement = -nums[i] - nums[j]
            if complement in seen:
                res.append([nums[i], nums[j], complement])
                while j + 1 < len(nums) and nums[j] == nums[j + 1]:
                    j += 1
            seen.add(nums[j])
            j += 1 
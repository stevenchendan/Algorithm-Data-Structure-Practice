/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  if (nums == undefined || nums.length < 1) {
      return -1;
  }
  if (nums.length == 1) {
      return 0;
  }
  let sum = nums.reduce((a, b) => a + b);
  let presum = 0;
  for (let i = 0; i <= nums.length; i++) {
      if (sum - presum - nums[i] == presum) {
          return i;
      }
      presum += nums[i];
  }
  return -1;
};
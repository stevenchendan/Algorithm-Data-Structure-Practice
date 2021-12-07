/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  if (!nums || nums.length < 1) {
    return -1;
  }
  let peakIndex = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= max) {
      max = nums[i];
      peakIndex = i;
    }
  }
  return peakIndex;
};

/**
 * Question: https://leetcode.com/problems/minimum-size-subarray-sum/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (target, nums) {
  let result = nums.length + 1;
  let slow = 0,
    fast = 0,
    sum = 0;

  //slide window
  while (fast < nums.length) {
    sum += nums[fast++];

    while (sum >= target) {
      result = result < fast - slow ? result : fast - slow;
      sum -= nums[slow++];
    }
  }

  return result > nums.length ? 0 : result;
};

export default minSubArrayLen;

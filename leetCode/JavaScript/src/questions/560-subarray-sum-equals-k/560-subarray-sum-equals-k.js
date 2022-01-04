/**
 * Question: https://leetcode.com/problems/subarray-sum-equals-k/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  //pre sum solution
  const map = { 0: 1 };
  let preSum = 0,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];

    if (map[preSum - k]) {
      count += map[preSum - k];
    }
    if (map[preSum]) {
      map[preSum]++;
    } else {
      map[preSum] = 1;
    }
  }

  return count;
};

export default subarraySum;

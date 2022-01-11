/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const result = [];
  const path = [];

  const backtracking = function (startIndex) {
    result.push(Array.from(path));
    for (let i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(i + 1);
      path.pop();
    }
  };

  backtracking(0);
  return result;
};

export default subsets;

/**
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  nums.sort((a, b) => {
    return a - b;
  });
  const result = [];
  const path = [];

  const permuteUniqueBacktracking = function (used) {
    if (nums.length === path.length) {
      result.push(Array.from(path));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
        continue;
      }
      if (!used[i]) {
        path.push(nums[i]);
        used[i] = true;
        permuteUniqueBacktracking(used);
        path.pop();
        used[i] = false;
      }
    }
  };

  permuteUniqueBacktracking([]);
  return result;
};

export default permuteUnique;

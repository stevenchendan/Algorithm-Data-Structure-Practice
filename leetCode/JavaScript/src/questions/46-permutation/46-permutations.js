/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const result = [];
  const path = [];

  const permuteBacktracking = function (n, k, used) {
    if (k === path.length) {
      result.push(Array.from(path));
      return;
    }

    for (let i = 0; i < k; i++) {
      if (used[i]) {
        continue;
      }
      path.push(n[i]);
      used[i] = true;
      permuteBacktracking(n, k, used);
      path.pop();
      used[i] = false;
    }
  };

  permuteBacktracking(nums, nums.length, []);
  return result;
};

export default permute;

//https://leetcode.com/problems/climbing-stairs/
/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function calculateHomeManyWaysClimbStairs(n) {
  //solution 1: store temp result into array
  const dp = new Array(n + 1).fill(0);
  // dp[0] = 1;
  // dp[1] = 1;
  // for (let i = 2; i < dp.length; i++) {
  //     dp[i] = dp[i - 2] + dp[i - 1];
  // }
  // return dp[n];

  //solution 2: only store two temp variable
  let pre = 1;
  let cur = 1;
  for (let i = 2; i < n + 1; i++) {
    const temp = cur;
    cur = pre + cur;
    pre = temp;
  }
  return cur;
};

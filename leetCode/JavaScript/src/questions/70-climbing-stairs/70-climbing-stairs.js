/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function calculateHomeManyWaysClimbStairs(n) {
  if (n < 0) {
    return -1;
  }

  const dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

export default climbStairs;

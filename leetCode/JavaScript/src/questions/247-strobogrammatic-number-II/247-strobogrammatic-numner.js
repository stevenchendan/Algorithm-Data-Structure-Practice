/**
 * @param {number} n
 * @return {string[]}
 */
const findStrobogrammatic = function (n) {
  const dp = [[""], ["0", "1", "8"]];

  for (let i = 2; i < n + 1; i++) {
    dp[i] = [];
    for (let center of dp[i - 2]) {
      if (i != n) {
        dp[i].push("0" + center + "0");
      }
      dp[i].push("1" + center + "1");
      dp[i].push("6" + center + "9");
      dp[i].push("8" + center + "8");
      dp[i].push("9" + center + "6");
    }
  }
  return dp[n];
};

export default findStrobogrammatic;

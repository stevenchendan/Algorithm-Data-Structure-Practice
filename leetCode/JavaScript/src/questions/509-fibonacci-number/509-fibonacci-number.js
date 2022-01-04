/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n < 0) {
    return -1;
  }

  const dpArray = [0, 1];

  for (let i = 2; i <= n; i++) {
    dpArray[i] = dpArray[i - 1] + dpArray[i - 2];
  }
  return dpArray[n];
};

export default fib;

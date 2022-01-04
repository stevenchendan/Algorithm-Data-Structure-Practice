/**
 * Question: https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let prev = intervals[0];
  const result = [];

  for (let i = 0; i < intervals.length; i++) {
    const cur = intervals[i];
    if (cur[0] > prev[1]) {
      result.push(prev);
      prev = cur;
    } else {
      prev[1] = Math.max(cur[1], prev[1]);
    }
  }

  result.push(prev);
  return result;
};

export default merge;

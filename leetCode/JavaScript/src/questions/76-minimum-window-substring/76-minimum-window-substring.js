/**
 * Question: https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 const minWindow = function(s, t) {
  if(!s || !t) {
      return '';
  }
    
  let targetOccurrence = {};
  let windowOccurrence = {};
  for (let c of t) {
    targetOccurrence[c] = (targetOccurrence[c] || 0) + 1;
  }
  let slow = 0,
    fast = 0;
  let valid = 0;
  let resultStart = 0,
    resultLength = Number.MAX_VALUE;
    
  while (fast < s.length) {
    const c = s[fast];
    fast++;
    if (targetOccurrence[c]) {
      windowOccurrence[c] = (windowOccurrence[c] || 0) + 1;
      if (windowOccurrence[c] == targetOccurrence[c]) {
        valid++;
      }
    }
    while (valid == Object.keys(targetOccurrence).length) {
      if (fast - slow < resultLength) {
        resultStart = slow;
        resultLength = fast - slow;
      }
      const d = s[slow];
      slow++;
      if (targetOccurrence[d]) {
        if (windowOccurrence[d] == targetOccurrence[d]) {
          valid--;
        }
        windowOccurrence[d]--;
      }
    }
  }
  return resultLength == Number.MAX_VALUE ? "" : s.substr(resultStart, resultLength);
};

export default minWindow;
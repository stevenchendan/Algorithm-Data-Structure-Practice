/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  count = {};
  for (const char of s) {
    if (!!count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  for (const char of t) {
    if (!!count[char]) {
      count[char] -= 1;
    } else {
      return false;
    }
  }
  Object.values(count).forEach((val) => {
    if (val !== 0) {
      return false;
    }
  });
  return true;
};

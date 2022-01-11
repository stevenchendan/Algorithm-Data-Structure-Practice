/**
 * @param {string} s
 * @return {boolean}
 */
// https://leetcode.com/problems/valid-parentheses/
const isValid = function (s) {
  if (s == undefined || s.length % 2 !== 0) {
    return false;
  }
  const characters = { ')': '(', '}': '{', ']': '[' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    switch (char) {
      case '(':
        stack.push(char);
        break;
      case '[':
        stack.push(char);
        break;
      case '{':
        stack.push(char);
        break;
      default:
        if (characters[char] !== stack.pop()) {
          return false;
        }
    }
  }
  return stack.length == 0;
};

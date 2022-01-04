/**
 * Question: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  if (!digits || digits == "") {
    return [];
  }

  const map = {
    0: [""],
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
    "*": ["+"],
    "#": [""],
  };
  const result = [];

  const backtracking = function (str, i) {
    // if the current index exceed the tree height then finish current tree branch
    if (i > digits.length - 1) {
      result.push(str);
      return;
    }

    const letters = map[digits[i]];

    for (let j = 0; j < letters.length; j++) {
      backtracking(str + letters[j], i + 1);
    }
  };

  //lookup letters from dict
  backtracking("", 0);

  return result;
};

export default letterCombinations;

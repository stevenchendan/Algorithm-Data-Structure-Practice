/**
 * Question: https://leetcode.com/problems/read-n-characters-given-read4/
 * Definition for read4()
 *
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
const readCharacters = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function (buf, n) {
    const temp = Array(4);
    let total = 0;

    while (total < n) {
      let count = read4(temp);
      count = Math.min(count, n - total);

      for (let i = 0; i < count; i++) {
        buf[total] = temp[i];
        total++;
      }

      if (count < 4) {
        break;
      }
    }
    return total;
  };
};

export default readCharacters;

/**
 * https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
  const temp = []
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
      while (buf.length < n) {
          if (temp.length === 0) {
              read4(temp);
              
          }
          if (temp.length === 0) {
              break;
          }
          while (buf.length < n && temp.length > 0) {
              buf.push(temp.shift());
          }
      }
      return buf.length;
  };
};
/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
 const productExceptSelf = function(nums) {
  if (!nums || nums.length == 0) {
      return [];
  }
  
  let rightMultipleResult = 1;
  const result = [1];
  
  //from left to right
  for (let i = 1; i < nums.length; i++) {
      result[i] = result[i - 1] * nums[i - 1];
  }
  //from right to left
  for (let j = nums.length - 1; j >= 0; j--) {
      result[j] = rightMultipleResult * result[j]
      rightMultipleResult = nums[j] * rightMultipleResult;
  }
  
  return result
};

export default productExceptSelf;

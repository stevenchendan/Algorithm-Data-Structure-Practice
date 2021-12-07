//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums && nums.length < 3) {
    return [];
  }
  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < nums.length - 2; i++) {
    let n1 = nums[i];
    if (n1 > 0) {
      break;
    }
    if (i - 1 >= 0 && n1 == nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let n2 = nums[left],
        n3 = nums[right];

      if (n1 + n2 + n3 === 0) {
        res.push([n1, n2, n3]);
        while (left < right && nums[left] == n2) {
          left++;
        }
        while (left < right && nums[right] == n3) {
          right--;
        }
      } else if (n1 + n2 + n3 < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

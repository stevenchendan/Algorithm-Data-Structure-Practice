/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  if (!nums1 || !nums2) {
    return [];
  }
  const nums1Set = new Set(nums1);
  const resultSet = new Set();
  for (let i = 0; i < nums2.length; i++) {
    if (nums1Set.has(nums2[i])) {
      resultSet.add(nums2[i]);
    }
  }

  return Array.from(resultSet);
};

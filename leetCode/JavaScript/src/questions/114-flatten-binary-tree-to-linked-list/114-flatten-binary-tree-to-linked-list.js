/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 const flatten = function(root) {
  const list = [];
  preorderTraversal(root, list);
  console.log(list);
  //loop tree
  for (let i = 1; i < list.length; i++) {
      const prev = list[i - 1], curr = list[i];
      prev.left = null;
      prev.right = curr;
  }
};

const preorderTraversal = (root, list) => {
  if (root != null) {
      list.push(root);
      preorderTraversal(root.left, list);
      preorderTraversal(root.right, list);
  }
} 
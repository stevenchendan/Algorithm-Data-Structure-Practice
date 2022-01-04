/**
 * Link: https://leetcode.com/problems/clone-graph/
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node == null) {
    return;
  }

  let visitedNode = new Map();

  const dfsClone = (n) => {
    // handle edge case
    if (n == null) {
      return null;
    }
    if (visitedNode.has(n.val)) {
      return visitedNode.get(n.val);
    }

    const clonedNode = new Node(n.val, []);
    visitedNode.set(n.val, clonedNode);

    for (const neighbor of n.neighbors) {
      const clonedNeighbor = dfsClone(neighbor);
      clonedNode.neighbors.push(clonedNeighbor);
    }

    return clonedNode;
  };

  return dfsClone(node);
};

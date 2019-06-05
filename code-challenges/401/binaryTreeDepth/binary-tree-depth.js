'use strict';

module.exports = function binaryTreeDepth(root, search, depthSoFar = 0) {

  if (root === null) return null;
  if (root.value === search) return depthSoFar;

  let left = binaryTreeDepth(root.left, search, depthSoFar + 1);
  let right = binaryTreeDepth(root.right, search, depthSoFar + 1);

  return left || right;

};

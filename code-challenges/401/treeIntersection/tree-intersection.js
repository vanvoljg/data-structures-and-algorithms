'use strict';

function treeIntersection(tree1, tree2) {
  const firstTreeSet = setFromTree(tree1.root);
  return setOfCommonValues(tree2.root, firstTreeSet);
}

function setFromTree(root, outputSet = new Set()) {
  if (root === null) {
    return null;
  }

  outputSet.add(root.value);
  setFromTree(root.left, outputSet);
  setFromTree(root.right, outputSet);
  return outputSet;
}

function setOfCommonValues(root, inputSet, outputSet = new Set()) {
  if (root === null) {
    return null;
  }
  if (inputSet.has(root.value)) {
    outputSet.add(root.value);
  }
  setOfCommonValues(root.left, inputSet, outputSet);
  setOfCommonValues(root.right, inputSet, outputSet);

  return outputSet;
}

module.exports = { treeIntersection, setFromTree, setOfCommonValues };

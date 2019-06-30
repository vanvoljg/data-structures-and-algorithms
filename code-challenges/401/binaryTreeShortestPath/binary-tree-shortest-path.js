'use strict';

const {
  Queue,
} = require('../../../data-structures/stacksAndQueues/lib/stacks-and-queues.js');
const LinkedList = require('../../../data-structures/linkedList/lib/linkedListSingle.js');

// Specialized version of breadth traversal, because we want to stop when we
// find either number, so as to find the one which is highest in the tree
function breadthTraverse(root, valueA, valueB) {
  let queue = new Queue(root);
  while (queue.peek()) {
    let current = queue.dequeue();
    if (current.value === valueA || current.value === valueB) {
      return current;
    }
    if (current.left) {
      queue.enqueue(current.left);
    }
    if (current.right) {
      queue.enqueue(current.right);
    }
  }
  return null;
}

function buildList(root, valueInTree) {
  if (root === null) {
    return null;
  }

  if (root.value === valueInTree) {
    return new LinkedList(root.value);
  }

  const left = buildList(root.left, valueInTree);
  const right = buildList(root.right, valueInTree);

  if (left) {
    left.insert(root.value);
    return left;
  }
  if (right) {
    right.insert(root.value);
    return right;
  }
  else {
    return null;
  }

}

function findPath(tree, valueA, valueB) {
  let startNode = breadthTraverse(tree.root, valueA, valueB);
  if (startNode === null) {
    return null;
  }
  let start = startNode.value === valueA ? valueA : valueB;
  let end = start === valueA ? valueB : valueA;
  let endNode = breadthTraverse(startNode, end, end);
  if (endNode === null) {
    return null;
  }
  let outputList = buildList(startNode, end);
  console.log(outputList);
  return outputList;
}

module.exports = { findPath, buildList, breadthTraverse };

'use strict';

const {
  findPath,
  breadthTraverse,
  buildList,
} = require('../binary-tree-shortest-path.js');
const {
  BinarySearchTree,
  Node: TreeNode,
} = require('../../../../data-structures/tree/tree.js');
const LinkedList = require('../../../../data-structures/linkedList/lib/linkedListSingle.js');

describe('Find the shortest path between two nodes in a binary tree', () => {
  const inputTree = new BinarySearchTree();

  for (let i = 1; i < 8; i++) {
    inputTree.add(i);
  }

  it('breadthTraverse should be able to find a subtree in a tree', () => {
    const start = 4;
    const end = 7;
    const subtree = breadthTraverse(inputTree.root, start, end);
    expect(subtree).not.toBeNull();
    expect(subtree).toBeInstanceOf(TreeNode);
  });

  it('buildList should be able to build a linked list from a subtree and a value inside that subtree', () => {
    const start = 4;
    const end = 7;
    const subtree = breadthTraverse(inputTree.root, start, end);
    const builtList = buildList(subtree, end);
    expect(builtList).toBeInstanceOf(LinkedList);
    expect(builtList.head.value).toEqual(start);
  });

  it('findPath should be able to find the path between two nodes in the same subtree', () => {
    const start = 4;
    const end = 7;
    const builtList = findPath(inputTree, start, end);
    expect(builtList).toBeInstanceOf(LinkedList);
    expect(builtList.head.value).toEqual(start);
  });
});

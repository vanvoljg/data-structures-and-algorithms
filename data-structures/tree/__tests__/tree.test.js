'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('BinaryTree class', () => {
  it('can create an empty tree', () => {
    let tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  it('can create a tree with a root node', () => {
    let tree = new BinaryTree('value');
    expect(tree.root).toBeDefined();
    expect(tree.root.value).toBeDefined();
    expect(tree.root.value).toEqual('value');
    expect(tree.root.left).toBeNull();
    expect(tree.root.right).toBeNull();
  });

  it('can add a left child and a right child to a root node', () => {
    let tree = new BinarySearchTree(10);
    tree.add(5);
    tree.add(20);
    expect(tree.root.value).toEqual(10);
    expect(tree.root.left.value).toEqual(5);
    expect(tree.root.right.value).toEqual(20);
  });

  it('can return a collection from preOrder traversal', () => {
    let tree = new BinaryTree('top');
    tree.root.left = new Node('left');
    tree.root.right = new Node('right');
    expect(tree.preOrder()).toEqual(['top', 'left', 'right']);
  });

  it('can return a collection from inOrder traversal', () => {
    let tree = new BinaryTree('top');
    tree.root.left = new Node('left');
    tree.root.right = new Node('right');
    expect(tree.inOrder()).toEqual(['left', 'top', 'right']);
  });

  it('can return a collection from postOrder traversal', () => {
    let tree = new BinaryTree('top');
    tree.root.left = new Node('left');
    tree.root.right = new Node('right');
    expect(tree.postOrder()).toEqual(['left', 'right', 'top']);
  });
});

'use strict';

const { Queue, Stack } = require('../stacksAndQueues/lib/stacks-and-queues.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    if (value) {
      this.root = new Node(value);
    } else {
      this.root = null;
    }
  }

  breadthFirst() {
    if (this.root === null) {
      return null;
    }

    let outputArray = [];
    let queue = new Queue(this.root);
    while (queue.peek()) {
      let current = queue.dequeue();
      outputArray.push(current.value);
      current.left && queue.enqueue(current.left);
      current.right && queue.enqueue(current.right);
    }

    return outputArray;
  }

  preOrder(root = this.root, outputArray = []) {
    // base case; loose equal to cover undefined as well as null
    if (root == null) {
      return;
    }

    outputArray.push(root.value);
    this.preOrder(root.left, outputArray);
    this.preOrder(root.right, outputArray);

    return outputArray;
  }

  inOrder(root = this.root, outputArray = []) {
    // base case; loose equal to cover undefined as well as null
    if (root == null) {
      return;
    }

    this.inOrder(root.left, outputArray);
    outputArray.push(root.value);
    this.inOrder(root.right, outputArray);

    return outputArray;
  }

  postOrder(root = this.root, outputArray = []) {
    // base case; loose equal to cover undefined as well as null
    if (root == null) {
      return;
    }

    this.postOrder(root.left, outputArray);
    this.postOrder(root.right, outputArray);
    outputArray.push(root.value);

    return outputArray;
  }

  static findMaximumValue(tree) {
    if (tree.root === null) {
      return null;
    }
    if (typeof tree.root.value !== 'number') {
      throw new Error('Tree contains non-numbers, cannot find a maximum value');
    }
    let max = tree.root.value;
    let queue = new Queue(tree.root);

    while (queue.peek()) {
      let current = queue.dequeue();

      max = Math.max(max, current.value);
      current.left && queue.enqueue(current.left);
      current.right && queue.enqueue(current.right);
    }

    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super(value);
  }

  add(value, root = this.root) {
    this.validateNumericalInput(value);
    if (root.value === value) {
      throw new Error(`${value} already in the tree`);
    }
    if (value < root.value) {
      if (root.left !== null) {
        this.add(value, root.left);
      } else {
        root.left = new Node(value);
        return value;
      }
    }
    if (value > root.value) {
      if (root.right !== null) {
        this.add(value, root.right);
      } else {
        root.right = new Node(value);
        return value;
      }
    }
  }

  contains(value) {
    this.validateNumericalInput(value);
    if (this.root === null) {
      throw new Error('Cannot search an empty tree');
    }
    let queue = new Queue(this.root);
    while (queue.peek()) {
      let current = queue.dequeue();
      if (current.value === value) {
        return true;
      }
      current.left && queue.enqueue(current.left);
      current.right && queue.enqueue(current.right);
    }
    return false;
  }

  validateNumericalInput(value) {
    if (typeof value !== 'number') {
      this.error();
    }
    return true;
  }

  error() {
    throw new TypeError('value must be a number');
  }

  static findMaximumValue(tree) {
    let current = tree.root;
    while (current) {
      if (typeof current.value !== 'number') {
        throw new Error(
          'Tree contains non-numbers, cannot find a maximum value'
        );
      }
      if (current.right === null) {
        return current.value;
      }
      current = current.right;
    }
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };

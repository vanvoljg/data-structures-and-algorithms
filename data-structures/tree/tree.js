'use strict';

const {Queue} = require('../stacksAndQueues/lib/stacks-and-queues.js');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(value) {
    this.root = null;
    if (value) {
      this.root = new Node(value);
    }
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
}

class BinarySearchTree extends BinaryTree {
  constructor(value) {
    super();
    this.validateInput(value);
    this.root = new Node(value);
  }

  add(value, root = this.root) {
    this.validateInput(value);
    if (root.value === value) {
      throw new Error(`${value} already in the tree`);
    }
    if (value < root.value) {
      if (root.left !== null) {
        this.add(value, root.left);
      } else {
        root.left = new Node( value );
        return value;
      }
    }
    if (value > root.value) {
      if (root.right !== null) {
        this.add(value, root.right);
      } else {
        root.right = new Node( value );
        return value;
      }
    }
  }

  contains(value) {
    this.validateInput(value);
    if (this.root === null) {
      throw new Error('Cannot search an empty tree');
    }
    let queue = new Queue(this.root);
    while(queue.peek()) {
      let current = queue.dequeue();
      if (current.value === value) {
        return true;
      }
      current.left && queue.enqueue(current.left);
      current.right && queue.enqueue(current.right);
    }
    return false;
  }

  validateInput(value) {
    if (typeof value !== 'number') {
      this.error();
    }
    return true;
  }

  error() {
    throw new TypeError('value must be a number');
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };

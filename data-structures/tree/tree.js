'use strict';

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

  preOrder(root, outputArray = []) {
    // base case; loose equal to cover undefined as well as null
    if (root == null) {
      return;
    }

    outputArray.push(root.value);
    this.preOrder(root.left, outputArray);
    this.preOrder(root.right, outputArray);

    return outputArray;
  }

  inOrder(root, outputArray = []) {
    // base case; loose equal to cover undefined as well as null
    if (root == null) {
      return;
    }

    this.inOrder(root.left, outputArray);
    outputArray.push(root.value);
    this.inOrder(root.right, outputArray);

    return outputArray;
}

  postOrder(root, outputArray = []) {
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

module.exports = BinaryTree;

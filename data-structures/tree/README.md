# Binary Tree and Binary Search Tree
Implement a BinaryTree class, and a BinarySearchTree class.

## Challenge
- Create a `Node` class that has properties for the value stored in the node, the left child node, and the right child node.
- Create a `BinaryTree` class
  - Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
- Create a `BinarySearchTree` class
  - Define a method named `add` that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
  - Define a method named `contains` that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
- `BinaryTree`
  - preOrder, inOrder, and postOrder
    - Time: O(n), n = number of nodes
    - Space: O(H) = O(lg n), H = height of tree, n = number of nodes
- `BinarySearchTree`
  - add
    - Time and Space: O(H) = O(lg n), H = height of tree, n = number of nodes
  - contains
    - Time: O(n), n = number of nodes
    - Space: O(1), using a queue

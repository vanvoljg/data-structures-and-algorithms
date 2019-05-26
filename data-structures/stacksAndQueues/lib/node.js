'use strict';

/**
 * Node class for linked lists
 * @class Node
 */
module.exports = class NodeSingle {
  // If no value is given for insertion, create a node with value=null.
  // If given a next, use that as the reference pointed by next.
  /**
   * Constructor
   * @param {*} value Value to create the node with
   * @param {Node} next The node which will be pointed to by the new node.
   */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
};

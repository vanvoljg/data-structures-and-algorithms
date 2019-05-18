'use strict';

class NodeSingle {
  // If no value is given for insertion, create a node with value=null.
  // If given a next, use that as the reference pointed by next.
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedListSingle {
  constructor(value) {
    // If the list is created with a value, set head to point to a new node with that value
    // Otherwise, head should point to null.
    this.head = value ? new NodeSingle(value) : null;

    // Set the tail reference to be the head, because they're the same at creation
    this.tail = this.head;
  }

  insertAtHead(value) {
    // When given a value, create a new node with that value
    // If this.head === null, the new node is created with next===null
    this.head = new NodeSingle(value, this.head);

    // If this.tail === null, this is a new list, so set tail to point at head
    if (this.tail === null) { this.tail = this.head; }

    return this;
  }

  insertAtTail(value) {
    // When this.head === null, list is empty
    if (this.head === null) {
      return this.insertAtHead(value);
    }

    this.tail.next = new NodeSingle(value);
    this.tail = this.tail.next;

    return this;
  }

  /**
   * Insert wrapper to allow insert to insert at head or tail
   * @param {*} value
   * @param {string} where
   */
  insert(value, where = 'head') {
    switch (where) {
    case 'tail':
      return this.insertAtTail(value);
    default:
      return this.insertAtHead(value);
    }
  }

  /**
   * Function to search for a specified value in a linked list
   * @param {*} value Value to search for
   * @returns {boolean}
   */
  includes(value) {
    if (!value) {
      console.error('A value to search for is required');
      return null;
    }

    if (!this.head) {
      console.error('Cannot search in an empty list');
      return null;
    }

    let current = this.head;

    // Traverse the list
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  /**
   * Function to get the values of a linked list
   * @returns {Array} Array of values in the list
   */
  print() {
    let printArray = [];

    if (!this.head) {
      return printArray;
    }

    let current = this.head;

    while (current) {
      printArray.push(current.value);
      current = current.next;
    }

    return printArray;
  }

}

module.exports = exports = { NodeSingle, LinkedListSingle };

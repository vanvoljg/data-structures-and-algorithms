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
    this.head = this.tail = null;
    this.length = 0;

    if (value) {
      this.head = new NodeSingle(value);
      this.length++;
    }

    // Set the tail reference to be the head, because they're the same at creation
    this.tail = this.head;
  }

  /**
   * Insert a value at the head of the list.
   * @param {*} value Value to insert. Optional.
   * @returns The modified Linked List
   */
  insert(value) {
    // When given a value, create a new node with that value
    // If this.head === null, the new node is created with next===null
    this.head = new NodeSingle(value, this.head);

    // If this.tail === null, this is a new list, so set tail to point at head
    if (this.tail === null) { this.tail = this.head; }
    this.length++;

    return this;
  }

  /**
   * Append a value to the end of the list.
   * @param {*} value Value to append. Optional.
   * @returns The modified Linked List
   */
  append(value) {
    // When this.head === null, list is empty
    if (this.head === null) {
      return this.insert(value);
    }

    this.tail.next = new NodeSingle(value);
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  /**
   * Inserts, before the given `value`, an element given by `newValue`
   * @param {*} value Value (maybe) in the list to insert before
   * @param {*} newValue Value to insert into the list
   * @returns The modified Linked List
   */
  insertBefore(value, newValue) {
    if (this.length === 0) {
      // Empty list. Throw exception
      throw new ReferenceError('Empty list');
    }
    let current = this.head;

    // If this list is one element long, the while loop below doesn't catch,
    // so check that first.
    if (current.value === value) {
      this.insert(newValue);
      return this;
    }

    while (current.next) {
      if ( current.next.value === value ) {
        let newNode = new NodeSingle(newValue, current.next);
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }

    throw new ReferenceError(`${value} not in list`);
  }

  /**
   * Inserts, after the given `value`, an element given by `newValue`
   * @param {*} value Value (maybe) in the list to insert after
   * @param {*} newValue Value to insert into the list
   * @returns The modified Linked List
   */
  insertAfter(value, newValue) {
    if (this.length === 0) {
      // Empty list. Throw exception
      throw new ReferenceError('Empty list');
    }

    let current = this.head;
    
    while (current) {
      if (current.value === value) {
        let newNode = new NodeSingle(newValue, current.next);
        current.next = newNode;
        this.length++;
        return this;
      }
      current = current.next;
    }
    
    throw new ReferenceError(`${value} not in list`);
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

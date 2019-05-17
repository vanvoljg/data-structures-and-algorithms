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
    // If the list is created with a value, set head point at a new node with that value
    // Otherwise, head should point to null.
    this.head = value ? new NodeSingle(value) : null;

    // Set the tail reference to be the head, because they're the same at creation
    this.tail = this.head;
  }

  insertBetween(node, next, prev) {
    node.next = next;
    prev.next = node;
  }

  insertAtHead(value) {
    // When given a value, create a new node with that value
    // If this.head === null, the new node is created with next===null
    let newNode = new NodeSingle(value, this.head);
    this.head = this.tail = newNode;

  }

  insertAtTailReference(value) {

    let newNode = new NodeSingle(value);
    
    // When this.head === null, list is empty
    if (!this.head) {
      this.head = this.tail = newNode;
      return this;
    }



  }

  insertAtTailTraverse(value) {

    let newNode = new NodeSingle(value);

    // when this.head === null, list is empty
    if (!this.head) {
      this.head = this.tail = newNode;
      return this;
    }

    let current = this.head;

    // Traverse the list
    // Current.next === null means we're at the tail node
    while (current.next) {
      current = current.next;
    }

    // Current now points at the tail node, so use that for insertion
    current.next = newNode;
    return this;

  }
}

// let test = new LinkedListSingle();
// console.log(new LinkedListSingle);
// test.insertAtHead('insert 1 value');
// test.insertAtHead('insert 2 value');
// test.insertAtHead('insert 3 value');
// test.insertAtTailTraverse('value');
// console.log(test);
// test.insertAtTailTraverse('value2');
// test.insertAtTailTraverse('value4');
// console.log(test);

module.exports = exports = { NodeSingle, LinkedListSingle };

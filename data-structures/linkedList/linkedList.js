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

  insertBetween(node, next, prev) {
    node.next = next;
    prev.next = node;
  }

  insertAtHead(value) {
    // When given a value, create a new node with that value
    // If this.head === null, the new node is created with next===null
    let newNode = new NodeSingle(value, this.head);
    this.head = this.tail = newNode;
    return this;
  }

  insertAtTailReference(value) {
    // When this.head === null, list is empty
    if (!this.head) {
      this.insertAtHead(value);
    }

    let newNode = new NodeSingle(value);

    this.tail.next = this.tail = newNode;
    return this;
  }

  insert(value, where = 'head') {
    switch (where) {
    case 'tail':
      this.insertAtTailReference(value);
      break;
    default:
      this.insertAtHead(value);
      break;
    }
  }

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
    while (current.next) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }

    return current === value;
  }

  print() {
    let printArray = [];

    if (!this.head) {
      return printArray;
    }

    let current = this.head;

    while (current.next) {
      printArray.push(current.value);
      current = current.next;
    }

    printArray.push(current.value);

    return printArray;
  }

}

let list = new LinkedListSingle();
// console.log(new LinkedListSingle());
// console.log(test.includes());
list.insert('fish');
list.insert('magic');
list.insert('bob', 'tail');
list.insertAtTailReference('FAIL');
list.insertAtTailReference('tail');
// console.log(test);
// console.log(test.includes('nope'));
console.log(list.print());
// test.insertAtHead('insert 1 value');
// test.insertAtHead('insert 2 value');
// test.insertAtHead('insert 3 value');
// test.insertAtTailTraverse('value');
// console.log(test);
// test.insertAtTailTraverse('value2');
// test.insertAtTailTraverse('value4');
// console.log(test);

module.exports = exports = { NodeSingle, LinkedListSingle };

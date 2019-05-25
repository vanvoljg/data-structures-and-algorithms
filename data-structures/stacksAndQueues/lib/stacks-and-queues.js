'use strict';

const Node = require('./node.js');

class Stack {
  constructor(value) {
    this.top = null;
    this.length = 0;

    if (value) {
      this.top = new Node(value);
      this.length++;
    }
  }

  peek() {
    return this.top !== null ? this.top.value : null;
  }

  push(value) {
    let node = new Node(value, this.top);
    this.top = node;
    return ++this.length;
  }

  pop() {
    if (this.top === null) {return null;}
    let value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }

}

class Queue {
  constructor(value) {
    this.front = null;
    this.length = 0;

    if(value) {
      this.front = new Node(value);
      this.length++;
    }

    this.back = this.front;
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.front = this.back = node;
    } else {
      this.back.next = node;
    }
    return ++this.length;
  }

  dequeue() {
    if (this.front === null) {return null;}
    let value = this.front.value;
    this.front = this.front.next;
    this.length--;
    return value;
  }
}

module.exports = exports = {Stack, Queue};

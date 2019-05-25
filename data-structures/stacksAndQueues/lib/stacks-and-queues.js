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
  }

  peek() {
    return this.front !== null ? this.front.value : null;
  }
}

module.exports = exports = {Stack, Queue};

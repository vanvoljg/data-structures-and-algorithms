"use strict";

const Node = require("./lib/node.js");
const { Stack } = require("./lib/stacks-and-queues.js");

module.exports = exports = class PseudoQueue {
  constructor() {
    this.s1 = new Stack();
    this.s2 = new Stack();
  }

  enqueue(value) {
    this.s1.push(value);
  }

  dequeue() {
    if (!this.s2.peek()) {
      if (!this.s1.peek()) {
        return null;
      }
      while (this.s1.peek()) {
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop();
  }
};

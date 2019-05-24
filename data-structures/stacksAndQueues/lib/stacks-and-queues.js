'use strict';

const Node = require('./node.js');


class Stack {
  constructor(value) {
    this.top = value ? new Node(value) : null;
    this.length = 0;
  }
}

class Queue {

}

module.exports = exports = {Stack, Queue};

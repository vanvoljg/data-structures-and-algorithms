'use strict';

const {LinkedListSingle: LinkedList} = require('../linkedList/lib/linkedListSingle.js');
const {NodeSingle: Node} = require('../linkedList/lib/nodeSingle.js');

module.exports = class Hashtable {
  constructor () {
    this.prime = 727;
    this.capacity = 1023;
    this.internalStorage = new Array(this.capacity).fill(new LinkedList());
  }

  add (key, value) {
  }

  get (key) {
  }

  contains (key) {
    return true;
  }

  hash (key) {
  }

};

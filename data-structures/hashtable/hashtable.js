'use strict';

const LinkedList = require('../linkedList/lib/linkedListSingle.js');
const Node = require('../linkedList/lib/nodeSingle.js');

// /**
//  * @module Hashtable implementation.
//  * @type {module.Hashtable}
//  */

module.exports = class Hashtable {

  // /**
  //  * @hideconstructor
  //  */

  constructor() {
    this.BIG_PRIME = 5039;
    this.SMALL_PRIME = 101;

    this.capacity = 12;
    this.internalStorage = new Array(this.capacity);
    for (let i = 0; i < this.internalStorage.length; i++) {
      this.internalStorage[i] = new LinkedList();
    }
  }

  // /**
  //  * @method add method takes in a key and value, and inserts them into the
  //  * Hashtable. Returns the hashtable.
  //  * @param key
  //  * @param value
  //  * @returns {module.Hashtable}
  //  */

  add(key, value) {
    const accessResult = this.access(key);
    const {keyIndex} = accessResult;
    if (accessResult.current === undefined) {
      this.internalStorage[keyIndex].insert([key, value]);
      return this;
    }
    accessResult.current.value[1] = value;
    return this;
  }

  // /**
  //  * @method get searches for a given key and returns the value, if found, or
  //  * undefined if not.
  //  * @param key
  //  * @returns {*|undefined}
  //  */

  get(key) {
    const accessResult = this.access(key);
    return accessResult.current ? accessResult.current.value[1] : undefined;
  }

  // /**
  //  * @method contains searches for the presence of a given key and returns a
  //  * boolean
  //  * @param key
  //  * @returns {boolean}
  //  */

  contains(key) {
    return !!this.access(key).current;
  }

  // /**
  //  * @method access searches the internal storage array for the presence of a
  //  * given key. If found, it returns both the node and the array index. Otherwise
  //  * it returns undefined
  //  * @param key
  //  * @returns {{current: Node|undefined, keyIndex: number}}
  //  */

  access(key) {
    const keyIndex = this.iGetIndex(key);

    let current = this.internalStorage[keyIndex].head;
    while (current) {
      if (current.value[0] === key) {
        return { current, keyIndex };
      }
      current = current.next;
    }
    return {current: undefined, keyIndex};
  }

  // /**
  //  * @method iGetIndex method returns an index within the range of the internal
  //  * storage array
  //  *
  //  * @param key
  //  * @returns {number}
  //  */

  iGetIndex(key) {
    _checkStringability(key);
    return this.hash(key) % this.capacity;
  }

  // /**
  //  * @method Hash method creates a hash based on an input key
  //  *
  //  * @param key
  //  * @returns {number}
  //  */

  hash(key) {
    const keyString = String(key);
    let hash = 1;

    for (let i = 0; i < keyString.length; i++) {
      const char = keyString[i];
      const charCode = char.charCodeAt(0);
      hash += charCode + (i + 1);
    }

    hash *= this.BIG_PRIME / this.SMALL_PRIME;
    hash = Math.floor(hash);

    return hash;
  }
};

// -----------------------------------------------------------------------------
// Helper Functions

function _checkStringability(thing) {
  switch (typeof thing) {
  case 'string':
    return true;
  case 'number':
    return true;
  case 'undefined':
    return true;
  case 'boolean':
    return true;
  case 'object':
    if (thing === null) {
      return true;
    }
    throw new TypeError('Invalid key');
  default:
    throw new TypeError('Invalid key');
  }
}

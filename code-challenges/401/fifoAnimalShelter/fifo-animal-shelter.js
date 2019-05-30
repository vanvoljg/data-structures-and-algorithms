'use strict';

const {Queue} = require('../../../data-structures/stacksAndQueues/lib/stacks-and-queues.js');

module.exports = class AnimalSheter {
  constructor () {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueue(type) {
    switch (type.toLowerCase()){
    case 'cat':
      this.cats.enqueue('cat');
      return;
    case 'dog':
      this.dogs.enqueue('dog');
      return;
    default:
      throw new SyntaxError('Must enqueue a cat or a dog');
    }
  }

  dequeue (pref) {
    switch (pref.toLowerCase()) {
    case 'cat':
      if ( this.cats.peek() ) {
        return this.cats.dequeue();
      }
      return null; // No cats to send back
    case 'dog':
      if ( this.dogs.peek() ) {
        return this.dogs.dequeue();
      }
      return null;
    default:
      throw new SyntaxError('Must dequeue a cat or a dog');
    }
  }

};

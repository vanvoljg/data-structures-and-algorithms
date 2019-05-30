'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('PseudoQueue class', () => {
  it('Can enqueue a value', () => {
    let pq = new PseudoQueue();
    pq.enqueue(5);
    expect(pq.s1.peek()).toEqual(5);
  });
  it('Can dequeue a value', () => {
    let pq = new PseudoQueue();
    pq.enqueue(5);
    let out = pq.dequeue();
    expect(out).toEqual(5);
  });
  it('dequeue() on an empty queue returns null', () => {
    let pq = new PseudoQueue();
    expect(pq.dequeue()).toBeNull();
  });
});

'use strict';

const { Stack, Queue } = require('../lib/stacks-and-queues.js');

const testValues = ['value1', 'value2', 'value3'];

describe('Stack', () => {
  it('Can instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.length).toEqual(0);
    expect(stack.top.value).toBeNull();
    expect(stack.top.next).toBeNull();
  });

  it('Can instantiate with a value', () => {
    let stack = new Stack(testValues[0]);
    expect(stack.length).toEqual(1);
    expect(stack.top.value).toEqual(testValues[0]);
    expect(stack.top.next).toBeNull();
  });

  it('Can peek at the top item without modifying the stack', () => {
    let stack = new Stack(testValues[0]);
    stack.peek();
    expect(stack.length).toEqual(1);
    expect(stack.top.value).toEqual(testValues[0]);
    expect(stack.top.next).toBeNull();
  });

  it('peek() returns the top value', () => {
    let stack = new Stack(testValues[0]);
    expect(stack.peek()).toEqual(testValues[0]);
  });

  it('can peek on an empty stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBeNull();
  });

  it('Can successfully push to an empty stack', () => {
    let stack = new Stack();
    stack.push(testValues[0]);
    expect(stack.length).toEqual(1);
    expect(stack.peek()).toEqual(testValues[0]);
  });

  it('Can push multiple items', () => {
    let stack = new Stack();
    testValues.forEach((value) => {
      stack.push(value);
    });
    expect(stack.length).toEqual(testValues.length);
    expect(stack.peek()).toEqual(testValues[2]);
  });

  it('Can pop an item off', () => {
    let stack = new Stack(testValues[0]);
    stack.push(testValues[1]);
    let removed = stack.pop();
    expect(stack.length).toEqual(1);
    expect(removed).toEqual(testValues[1]);
    expect(stack.peek()).toEqual(testValues[0]);
  });

  it('Can empty the stack with pop', () => {
    let stack = new Stack(testValues[0]);
    let popped = stack.pop();
    expect(popped).toEqual(testValues[0]);
    expect(stack.length).toEqual(0);
    expect(stack.peek()).toBeNull();
  });

  it('pop on an empty stack returns null', () => {
    let stack = new Stack();
    expect(stack.pop()).toBeNull();
  });
});

describe('Queue', () => {
  it('Can instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.length).toEqual(0);
    expect(queue.front.value).toBeNull();
    expect(queue.front.next).toBeNull();
  });

  it('Can instantiate with a value', () => {
    let queue = new Queue(testValues[0]);
    expect(queue.length).toEqual(1);
    expect(queue.front.value).toEqual(testValues[0]);
    expect(queue.front.next).toBeNull();
  });

  it('Can peek at the next item without modifying the queue', () => {
    let queue = new Queue(testValues[0]);
    queue.peek();
    expect(queue.length).toEqual(1);
    expect(queue.front.value).toEqual(testValues[0]);
    expect(queue.front.next).toBeNull();
  });

  it('peek() returns the next value', () => {
    let queue = new Queue(testValues[0]);
    expect(queue.peek()).toEqual(testValues[0]);
  });

  it('can peek on an empty queue', () => {
    let queue = new Queue();
    expect(queue.peek()).toBeNull();
  });

  it('Can enqueue an item on an empty queue', () => {
    let queue = new Queue();
    queue.enqueue(testValues[0]);
    expect(queue.length).toEqual(1);
    expect(queue.peek()).toEqual(testValues[0]);
  });

  it('Can enqueue multiple items', () => {
    let queue = new Queue();
    testValues.forEach((value) => {
      queue.enqueue(value);
    });
    expect(queue.length).toEqual(testValues.length);
    expect(queue.peek()).toEqual(testValues[0]);
  });

  it('Can dequeue the next item', () => {
    let queue = new Queue(testValues[0]);
    queue.enqueue(testValues[1]);
    let removed = queue.dequeue();
    expect(queue.length).toEqual(1);
    expect(removed).toEqual(testValues[0]);
    expect(queue.peek()).toEqual(testValues[1]);
  });

  it('Can empty a queue with pop', () => {
    let queue = new Queue(testValues[0]);
    let removed = queue.dequeue();
    expect(removed).toEqual(testValues[0]);
    expect(queue.length).toEqual(1);
    expect(queue.peek()).toBeNull();
  });

  it('dequeue on an empty queue returns null', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toBeNull();
  });
});

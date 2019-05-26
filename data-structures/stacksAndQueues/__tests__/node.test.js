'use strict';

/*
Can successfully instantiate an empty linked list
Can properly insert into the linked list
The head property will properly point to the first node in the linked list
Can properly insert multiple nodes into the linked list
Will return true when finding a value within the linked list that exists
Will return false when searching for a value in the linked list that does not exist
Can properly return a collection of all the values that exist in the linked list
*/

const Node = require('../lib/node.js');

describe('Nodes can be created on their own', () => {
  it('With no parameters', () => {
    let node = new Node();
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toBeNull();
    expect(node.next).toBeNull();
  });

  it('With a single truthy parameter, sets the node value to that value', () => {
    let nodeString = new Node('test');
    let nodeNumber = new Node(1);
    let nodeArray = new Node([1]);
    let nodeObject = new Node({ test: 'a' });
    let nodeTrue = new Node(true);
    expect(nodeString.value).toEqual('test');
    expect(nodeNumber.value).toEqual(1);
    expect(nodeArray.value).toEqual([1]);
    expect(nodeObject.value).toEqual({ test: 'a' });
    expect(nodeTrue.value).toBeTruthy();
  });

  it('Will set the node value to "false" when the given parameter is "false"', () => {
    let nodeFalse = new Node(false);
    expect(nodeFalse.value).toEqual(false);
  });

  it('Will set the node value to "null" when the given parameter is undefined or null', () => {
    let nodeNull = new Node(null);
    let nodeUndefined = new Node(undefined);
    expect(nodeNull.value).toBeNull();
    expect(nodeUndefined.value).toBeNull();
  });
});

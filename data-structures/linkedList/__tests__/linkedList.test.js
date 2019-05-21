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

const {LinkedListSingle: LinkedList, NodeSingle: Node} = require('../linkedList.js');

describe('Linked Lists are a collection of Nodes', () => {
  describe('Nodes can be created on their own', () => {
    it('With no parameters', () => {
      let node = new Node;
      expect(node).toBeInstanceOf(Node);
      expect(node.value).toBeNull();
      expect(node.next).toBeNull();
    });
  });
});


describe('Singly linked lists', () => {
  
  it('Can be created with no input', () => {
    expect(new LinkedList).toBeInstanceOf(LinkedList);
  });

  it('Has a head property', () => {
    expect(new LinkedList).toHaveProperty('head');
  });

  it('Has a tail property', () => {
    expect(new LinkedList).toHaveProperty('tail');
  });

  it ('Has head and tail pointing to the same node when the list has only one node', () => {
    let list = new LinkedList('value');
    expect(list.head).toEqual(list.tail);
  })

  it('Can have values inserted at the head', () => {
    let list = new LinkedList('value1');
    list.insert('value2');
    expect(list.head.value).toStrictEqual('value2');
  });

  it('Can have values inserted at the tail', () => {
    let list = new LinkedList('value1');
    list.append('value2');
    expect(list.tail.value).toStrictEqual('value2');
  });

  it('Can have values inserted at the tail of an empty list', () => {
    let list = new LinkedList;
    list.append('value1');
    expect(list.tail.value).toStrictEqual('value1');
  })

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList('value1');
    list.insert('value2');
    expect(list.head).toEqual({value:'value2',next:{value:'value1',next:null}});
  });

  it('Will return null when searching an empty list', () => {
    let list = new LinkedList;
    expect(list.includes('value')).toBeNull();
  })

  it('Will return null when searching for no value', () => {
    let list = new LinkedList('value');
    expect(list.includes()).toBeNull();
  })

  it('Will return true when finding a value that exists in the list', () => {
    let list = new LinkedList('value1');
    list.insert('value2');
    expect(list.includes('value1')).toBeTruthy();
  });

  it('Will return false when finding a value that does NOT exist in the list', () => {
    let list = new LinkedList('value1');
    list.insert('value2');
    expect(list.includes('not present')).toBeFalsy();
  });

  it('Can return a collection of the values that exist in the list', () => {
    let list = new LinkedList;
    expect(list.print()).toEqual([]);
    list.insert('value1');
    list.insert('value2');
    expect(list.print()).toEqual(['value2', 'value1']);
  });

  it('Can insert before a specified value', () => {
    let list = new LinkedList('1');
    list.insertBefore('1', '2');
    expect(list.head).toEqual({value:'2',next:{value:'1',next:null}});
  });

  it('can insert after a specified value', () => {
    let list = new LinkedList('1');
    list.insertAfter('1', '2');
    expect(list.head).toEqual({value:'1',next:{value:'2',next:null}});
  });
});

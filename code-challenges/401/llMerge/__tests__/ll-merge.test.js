'use strict';

const mergeLists = require('../ll-merge.js');
const LinkedList = require('../../../../data-structures/linkedList/lib/linkedListSingle.js');
const Node = require('../../../../data-structures/linkedList/lib/nodeSingle.js');

describe('linked list merge function', () => {

  it('should be able to merge a linked list', () => {
    let list1 = new LinkedList('a');
    let list2 = new LinkedList('b');

    expect(() => {
      mergeLists(list1, list2);
    }).not.toThrow();
  });

  it('should return a reference to the head of the new list, which is a Node', () => {
    let list1 = new LinkedList('a');
    let list2 = new LinkedList('b');
    let merged = mergeLists(list1, list2);
    expect(merged).toBeInstanceOf(Node);
  });

  it('works for lists with multiple items', () => {
    let list1 = new LinkedList('b');
    let list2 = new LinkedList('kitty');
    list1.insert('c');
    list1.append('fish');
    list2.insert(80);
    list2.insert(false);

    let merged = mergeLists(list1, list2);
    expect(merged.value).toEqual('c');
  });

});

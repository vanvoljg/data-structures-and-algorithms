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

const {LinkedListSingle: LinkedList} = require('../linkedList.js');

describe('Singly linked lists', () => {
  it('Can be created with no input', () => {
    let newList = new LinkedList;
    expect(newList).toBeInstanceOf(LinkedList);
    expect(newList.head).toBeNull();
  });
  
  it('Can have values inserted at the head', () => {

  });

  it('Can have values inserted at the tail', () => {

  });

  it('Has a head property pointing to the first item', () => {

  });

  it('Has a tail property pointing to the last item', () => {

  });

  it('Will build a linked list with successive insertions', () => {

  });

  it('Will return true when finding a value that exists in the list', () => {

  });

  it('Will return false when finding a value that does NOT exist in the list', () => {

  });

  it('Can return a collection of the values that exist in the list', () => {

  });
});
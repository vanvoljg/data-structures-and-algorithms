# Singly Linked List
A linear data structure in which each node holds a value and a reference to the next node.

## Challenge
Write an implementation of singly linked lists with the following methods:
- `insert` - Takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- `includes` - Takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- `print` - Takes in no arguments and returns a collection all of the current Node values in the Linked List.
- `append` - Adds a value after the final item in the list
- `insertBefore` - Insert a value before the given value in the list
- `insertAfter` - Insert a value after the given value in the list
- `kthFromEnd` - Returns the value of the item that is k from the end
- `findMiddleIdx` - Returns the index of the middle element in the list
- `findMiddleValue` - Returns the value of the middle element in the list

## Approach & Efficiency
LinkedList stores both a head and tail reference to allow for O(1) insertions at either head or tail.
- `insert()` efficiency: O(1) Time, O(1) Space at either head or tail.
- `includes()` efficiency: O(n) Time, O(1) Space
- `print()` efficiency: O(n) Time, O(n) Space, where n is the number of items in the list
- `append()` efficiency: O(1) Time, O(1) Space
- `insertBefore()` efficiency: O(n) Time, O(1) Space
- `insertAfter()` efficiency: O(n) Time, O(1) Space
- `kthFromEnd()` efficiency: O(n) Time, O(1) Space
- `findMiddleIdx()` efficiency: O(1) Time, O(1) Space
- `findMiddleValue()` efficiency: O(n) Time, O(1) Space

## Classes and Methods
- `LinkedListSingle` - Class which describes a singly-linked list.
  - `.insert([value])` - Will insert the specified value (or `null`) at the head of the list. Value is optional.
  - `.append([value]) - Will insert at the tail of the list. Value is optional.
  - `.includes(value)` - Searches for a specified value in the list. Returns `true` or `false`. Returns `null` if no value is specified.
  - `.print()` - Returns a collection (array) of the values in the list.
  - `append(value)` - Adds a value after the final item in the list
  - `insertBefore(existing, new)` - Insert a new value before the given value in the list
  - `insertAfter(existing, new)` - Insert a value after the given value in the list
  - `kthFromEnd(k)` - Returns the value of the item that is k from the end
  - `findMiddleIdx()` - Returns the index of the middle element in the list
  - `findMiddleValue()` - Returns the value of the middle element in the list
- `NodeSingle` - Class describing a singly-linked node.
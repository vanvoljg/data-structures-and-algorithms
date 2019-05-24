# Stacks and Queues
Stack: a linear data structure, First In, Last Out (FILO) / Last In, First Out (LIFO).
Queue: a linear data structure, First In, First Out (FIFO) / Last In, Last Out (LILO).

## Challenge
- Create a `Node` class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a `Stack` class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to `top` when the stack is created.
  - Define a method called `push` which takes any value as an argument and adds a new node with that value to the `top` of the stack with an O(1) Time performance.
  - Define a method called `pop` that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
  - Define a method called `peek` that does not take an argument and returns the value of the node located on the `top` of the stack.
- Create a `Queue` class that has a `top` property. It creates an empty queue when instantiated.
  - This object should be aware of a default empty value assigned to `front` when the queue is created.
  - Define a method called `enqueue` which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  - Define a method called `dequeue` that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
  - Define a method called `peek` that does not take an argument and returns the value of the node located in the front of the stack.
- At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.


## Approach & Efficiency
LinkedList stores both a head and tail reference to allow for O(1) insertions at either head or tail.
- `insert()` efficiency: O(1) Time, O(1) Space at either head or tail.
- `includes()` efficiency: O(n) Time, O(1) Space
- `print()` efficiency: O(n) Time, O(n) Space

## Classes and Methods
- `LinkedListSingle` - Class which describes a singly-linked list.
  - `.insert([value])` - Will insert the specified value (or `null`) at the head of the list. Value is optional.
  - `.append([value]) - Will insert at the tail of the list. Value is optional.
  - `.includes(value)` - Searches for a specified value in the list. Returns `true` or `false`. Returns `null` if no value is specified.
  - `.print()` - Returns a collection (array) of the values in the list.
- `NodeSingle` - Class describing a singly-linked node.
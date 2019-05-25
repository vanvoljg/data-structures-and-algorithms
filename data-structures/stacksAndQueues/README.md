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
### Stack class
- `.push()` efficiency: O(1) Time, O(1) Space
- `.pop()` efficiency: O(1) Time, O(1) Space
- `.peek()` efficiency: O(1) Time, O(1) Space
### Queue class
- `.enqueue()` efficiency: O(1) Time, O(1) Space
- `.dequeue()` efficiency: O(1) Time, O(1) Space
- `.peek()` efficiency: O(1) Time, O(1) Space


## Classes and Methods
- `Stack` - Last In, Frst Out (LIFO) / First In, Last Out (FILO). Linear data structure.
  - `.push([value])` - Adds a value to the top of the stack and returns the new length of the stack.
  - `.pop()` - Removes the top value from the stack and returns it.
  - `.peek()` - Returns the top value from the stack, without modifying the stack.
- `Queue` - First In, First Out (FIFO) / Last In, Last Out (LILO). Linear data structure.
  - `.enqueue([value])` - Adds a value to the back queue and returns the new length of the queue.
  - `.dequeue()` - Removes the next value from the front of the queue and returns it.
  - `.peek()` - Returns the front value from the queue, without modifying the queue.
# Graph - Depth First Traversal

Conduct a depth first preorder traversal on a graph

## Challenge

Create a function that accepts an adjacency list as a graph, and conducts a depth first traversal. Without utilizing any of the built-in methods available to your language, return a collection of nodes in their pre-order depth-first traversal order.

## Approach & Efficiency

- This is a recursive approach due to the depth-first traversal. A stack data structure could be used to avoid using the call stack.
- It will use two functions:
  - The main called function which takes in the adjacency list and
  - A recursive helper function to traverse the graph
- Because this is a graph traversal, we need an object or set to contain the vertices which have been visited
- Recursive helper is called with a vertex, an array of connected edges, and a reference to the visited set
  - Base case for the function: When there are no further edges to travel that have not been visited
  - Recursive case for the function:
    - Check if the current vertex has been visited. If not,
      - Add the current vertex to the visited set (Pre-order method lets us use this set as the return collection as well)
      - Recurse with the first new vertex in the current one's edge list

### Efficiency

- Time O(n), where n is the number of vertices in the graph.
- Space O(n), where n is the number of vertices in the graph.

## Solution

![Embedded whiteboard picture]()

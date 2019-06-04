# FizzBuzz - Tree
Conduct “FizzBuzz” on a tree while traversing through it. Change the values of each of the nodes dependent on the current node’s value.

## Challenge
- Write a function called FizzBuzzTree which takes a tree as an argument.
- Without utilizing any of the built-in methods available to your language, determine weather or not the value of each node is divisible by 3, 5 or both, and change the value of each of the nodes:
  - If the value is divisible by 3, replace the value with “Fizz”
  - If the value is divisible by 5, replace the value with “Buzz”
  - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
- Return the tree with its new values.

## Approach & Efficiency
This approach uses depth-first recursion to traverse the tree.
Check if value is divisible by 3 and 5 first, then 5, then 3.

### Efficiency
- Time O(n), where n is the number of nodes in the tree.
- Space O(1)

## Solution
![Embedded whiteboard picture]()

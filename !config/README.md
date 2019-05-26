# Reverse an Array
This is a function to reverse the order of elements in an array.

## Challenge
Write a function called `reverseArray` which takes an array as an argument. Without using any built-in JavaScript helpers, return an array with elements in reverse order.

## Approach & Efficiency
The approach for this is a reverse-in-place method which both modifies the original input array AND returns the modified array.
- Using a `for` loop to iterate over the array
  - Start from element `0`, go to half the length (`n`) of the array (loop ends at `n/2`).
    - Because this is an in-place modification, two elements of the array are switched with each loop iteration
  - Switch current element with corresponding element starting from the end:
    - element 0 <-> element n
    - element 1 <-> element n-1
    - element 2 <-> element n-2
    - etc.

## Solution
![Embedded whiteboard picture](./assets/whiteboard-1.jpg)

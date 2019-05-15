# arrayShift
This is a function which adds an element to the middle of an array.

## Challenge
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency
### This is an in-place modification which shifts the second half of the array, and inserts an element into the middle.
- Loop backwards over the array from the end to the calculated halfway point.
  - Shift each value to the right (element i -> elemenet i+1)
- At halfway point, insert the element at that point
### Efficiency
- Time: O(n)

## Solution
![Embedded whiteboard picture](./assets/01.jpg)
![Embedded whiteboard picture](./assets/02.jpg)
![Embedded whiteboard picture](./assets/03.jpg)
![Embedded whiteboard picture](./assets/04.jpg)
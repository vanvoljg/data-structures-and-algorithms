# Binary Tree Depth

Given a 2D array where the rows are sorted and contain only 0 and 1. Return the index of the row with the biggest amount of zeroes, and the index of the row with the biggest amount of ones.

## Approach & Efficiency

**Possible solutions:**

- Loop through the outer array and, for each inner array, calculate the sum of the array.
  - Check if each array is greater than the current max or less than the current min
  - Keep the index of the current max and current min
  - Return those indices
- If the rows themselves are sorted such that the row with the fewest number of zeros is at the beginning, then the first row and last row would be the correct rows.
- If each row is sorted such that the zeros are at the start and the ones are at the end
  - Keep track of the index of the array with the greatest number of 0s
    - (object or map, key is index in the outer array, of the row found, and the value is the index in the row, of the first one in the row)
  - Looping through the outer array, check the each array with a for loop (to break) and find the first index of a 1. Store this index and the index of the row.
  - Compare to the max and min stored above to determine if they need to be updated

### Efficiency

- Time: O(n \* m), n is the number of rows, m is the number of elements in each row
- Space: O(1)

## Solution

![Embedded whiteboard picture](./assets/array-two-dim-zeros.jpg)

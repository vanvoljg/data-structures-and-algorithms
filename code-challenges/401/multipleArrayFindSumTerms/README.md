# Find Two Terms - multiple
Given an integer array and an integer, check if there are two numbers in the array which sum to equal the given value.

## Challenge
Work on at least two different ways to do this.

## Approach & Efficiency
### Approaches
- Brute-force approach - check each pair of elements in the array with nested loops.
- Use a hashmap to store the values, then loop through the array, checking the hashmap to see if a working number exists in the map.

### Efficiency
- Brute-force
    - Time: O(n^2), where n is the length of the array
    - Space: O(1)
- Hashmap
    - Time: O(2n) = O(n), where n is the length of the array
    - Space: O(n), where n is the length of the array.

## Solution
![Embedded whiteboard picture](./assets/multiple-find-sum-terms.jpg)

'use strict';

/**
 * Binary Search method to find a value in a sorted array of numbers
 * @module binarySearch
 * @param {Number[]} arr A sorted array of numbers
 * @param {Number} value A target number to find in the array
 * @returns {Number} Index of the number found in the array, or -1 if not found.
 */
module.exports = function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    if (arr[m] === value) {
      return m;
    }
    if (arr[m] < value) {
      left = m + 1;
    }
    if (arr[m] > value) {
      right = m - 1;
    }
  }
  return -1;
};

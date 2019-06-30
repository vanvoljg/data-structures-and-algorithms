'use strict';

function inBuilt(array) {
  if (!(array instanceof Array)) {
    return TypeError();
  }
  return array.reverse();
}

function inPlace(array) {
  if (!(array instanceof Array)) {
    return TypeError();
  }

  // [ 0  1  2  3  4 ]  length = 5; 5/2 = 2.5, 2.5-1 = 1.5, floor = 1
  //      ^             This is the last number we need to swap for an odd-length
  // [ 0  1  2  3 ]     length = 4; 4/2 = 2, 2-1 = 1, floor = 1
  //      ^             This is the last on an even-length array
  const lastIndexToSwap = Math.floor(array.length / 2 - 1);

  for (let i = 0; i <= lastIndexToSwap; i++) {
    const swapIndex = array.length - 1 - i;
    const temp = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = temp;
  }

  return array;
}

function makeCopy(array) {
  if (!(array instanceof Array)) {
    return TypeError();
  }

  const outputArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    outputArray.push(array[i]);
  }

  return outputArray;
}

module.exports = exports = { inBuilt, inPlace, makeCopy };

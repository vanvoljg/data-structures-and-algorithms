'use strict';

function secondLargestReverseSort(array) {
  if (array.length < 2) return null;

  let returnArray = array.sort((a, b) => {
    return a > b ? -1 : 1;
  });

  return returnArray[1];
}

function secondLargestRecursive(array, largestSoFar, secondLargestSoFar) {
  if (array.length < 2) return null;

  if (largestSoFar == null) {
    largestSoFar = array[0] > array[1] ? array[0] : array[1];
  }
  if (secondLargestSoFar == null) {
    secondLargestSoFar = array[0] > array[1] ? array[1] : array[0];
  }

  if (array.length === 2) {
    if (array[1] > largestSoFar) return largestSoFar;
    if (array[1] > secondLargestSoFar && array[1] < largestSoFar) return array[1];
    return secondLargestSoFar;
  }


  if (array[0] > largestSoFar) {
    secondLargestSoFar = largestSoFar;
    largestSoFar = array[0];
  }
  if (array[0] > secondLargestSoFar && array[0] < largestSoFar) {
    secondLargestSoFar = array[0];
  }

  return secondLargestRecursive(array.slice(1), largestSoFar, secondLargestSoFar);
}

function secondLargestLoop(array) {
  if (array.length < 2) return null;

  let largestSoFar = array[0] > array[1] ? array[0] : array[1];
  let secondLargestSoFar = array[0] > array[1] ? array[1] : array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > largestSoFar) {
      secondLargestSoFar = largestSoFar;
      largestSoFar = array[i];
    }

    if (array[i] > secondLargestSoFar && array[i] < largestSoFar) {
      secondLargestSoFar = array[i];
    }
  }
  return secondLargestSoFar;
}

module.exports = {secondLargestReverseSort, secondLargestRecursive, secondLargestLoop};

'use strict';

function findZerosSorted(arrayOfArrays) {
  let maxIndex = 0;
  let minIndex = 0;
  let maxZeroIndex = 0;
  let minZeroIndex = 0;
  arrayOfArrays.forEach((rowArray, rowIndex) => {
    for (let i = 0; i < rowArray.length; i++) {
      if (rowArray[i] === 1) {
        if (i < minZeroIndex) {
          minZeroIndex = i;
          minIndex = rowIndex;
          break;
        }
        if (i > maxZeroIndex) {
          maxZeroIndex = i;
          maxIndex = rowIndex;
          break;
        }
      }
    }
  });

  return [minIndex, maxIndex];
}

function findZerosSum(arrayOfArrays){
  let maxIndex = 0;
  let minIndex = 0;
  let maxSum = 0;
  let minSum = 0;

  arrayOfArrays.forEach((row, rowIndex) => {
    let sum = 0;
    row.forEach((number) => {
      sum += number;
    });
    if (sum < minSum) {
      minIndex = rowIndex;
    }
    else if (sum > maxSum) {
      maxIndex = rowIndex;
    }

  });

  return [minIndex, maxIndex];
}

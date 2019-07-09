'use strict';

function flagSort(array) {
  const center = Math.floor(array.length / 2);
  let leftBlueIndex = 0;
  let rightBlueIndex = array.length - 1;
  let blueCount = 0;
  let index = 0;

  while (index < rightBlueIndex + 1) {
    let currentWord = array[index].toLowerCase();
    switch (currentWord) {
    case 'blue':
      if (blueCount % 2 === 0) {
        swap(array, index, leftBlueIndex);
        leftBlueIndex++;
        index++;
      } else {
        swap(array, index, rightBlueIndex);
        rightBlueIndex--;
      }
      blueCount++;
      continue;
    case 'shield':
      if (index === center) {
        index++;
        continue;
      }
      swap(array, index, center);
      continue;
    default:
      index++;
    }
  }
  return array;
}

function swap(array, indexA, indexB) {
  const temp = array[indexB];
  array[indexB] = array[indexA];
  array[indexA] = temp;
}

module.exports = flagSort;

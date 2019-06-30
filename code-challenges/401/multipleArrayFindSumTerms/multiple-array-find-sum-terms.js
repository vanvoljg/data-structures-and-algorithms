'use strict';

function withSet(array, sum) {
  if (array.length < 2) {
    return null;
  }

  const set = new Set(array);

  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i];
    if (set.has(difference)) {
      return [array[i], difference];
    }
  }

  return null;
}

function withObject(array, sum) {
  if (array.length < 2) {
    return null;
  }
  const object = {};
  array.forEach((element) => {
    object[element] = true;
  });

  for (let i = 0; i < array.length; i++) {
    const difference = sum - array[i];
    if (object[difference]) {
      return [array[i], difference];
    }
  }

  return null;
}

function nestedLoops(array, sum) {
  if (array.length < 2) {
    return null;
  }
  for (let i = 0; i < array.length - 1; i++) {
    const difference = sum - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if ((array[j] = difference)) {
        return [array[i], difference];
      }
    }
  }

  return null;
}

module.exports = { withSet, withObject, nestedLoops };

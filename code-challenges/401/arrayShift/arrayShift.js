'use strict';

function insertShiftArray(arr, item) {
  if (typeof item == undefined) throw new TypeError;
  // the following works... but also works for objects with no numeric keys.
  // Would it be better to use Array.isArray() instead?
  if (typeof arr !== 'object') throw new TypeError;
  if (arr.length === 0) return [item];
  let half = Math.ceil(arr.length / 2);
  for (let i = arr.length; i > half; i--) {
    arr[i] = arr[i - 1];
  }
  arr[half] = item;
  return arr;
}

console.log(insertShiftArray([2,4,6,8], 5));
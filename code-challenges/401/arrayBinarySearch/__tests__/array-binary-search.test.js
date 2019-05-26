'use strict';

const binarySearch = require('../array-binary-search.js');

describe('binary search function', () => {
  it('should return null for incorrect typed inputs', () => {
    expect(binarySearch({}, 4)).toBeNull();
    expect(binarySearch('moo', 3)).toBeNull();
    expect(binarySearch(4, 8)).toBeNull();
    expect(binarySearch(null, 8)).toBeNull();
    expect(binarySearch(undefined, 8)).toBeNull();
    expect(binarySearch(true, 4)).toBeNull();
  });

  it('should return null when missing a search value', () => {
    expect(binarySearch([4])).toBeNull();
    expect(binarySearch([4])).toBeNull();
  });

  it('should return -1 when a number is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 8)).toEqual(-1);
    expect(binarySearch([5, 6, 7, 8], 1)).toEqual(-1);
    expect(binarySearch([1, 3, 5, 7, 9], 4)).toEqual(-1);
  });

  it('should return the index of the number in the array, if it is found', () => {
    expect(binarySearch([1], 1)).toEqual(0);
    expect(binarySearch([1, 2, 3], 2)).toEqual(1);
  });

  it('can handle Number (object) search types as well', () => {
    let num = new Number(4);
    expect(binarySearch([4], num)).toEqual(0);
  });
});

describe('speed tests', () => {
  it('100 elements', () => {
    let size = 100;
    let test = new Array(size);
    for (let i = 0; i < size; i++) {
      test[i] = i;
    }
    let tests = 10000;
    let start = new Date();
    for (let i = 0; i < tests; i++) {
      binarySearch(test, Math.random() * (size + 1) - 2);
    }
    let end = new Date();
    console.log(start, end);
    console.log(`${tests} tests`);
    console.log('duration: ', (end - start) / tests);
  });

  it('10,000 elements', () => {
    let size = 10000;
    let test = new Array(size);
    for (let i = 0; i < size; i++) {
      test[i] = i;
    }
    let tests = 10000;
    let start = new Date();
    for (let i = 0; i < tests; i++) {
      binarySearch(test, Math.random() * (size + 1) - 2);
    }
    let end = new Date();
    console.log(start, end);
    console.log(`${tests} tests`);
    console.log('duration: ', (end - start) / 2);
  });

  it('100,000 elements', () => {
    let size = 100000;
    let test = new Array(size);
    for (let i = 0; i < size; i++) {
      test[i] = i;
    }
    let tests = 10000;
    let start = new Date();
    for (let i = 0; i < tests; i++) {
      binarySearch(test, Math.random() * (size + 1) - 2);
    }
    let end = new Date();
    console.log(start, end);
    console.log(`${tests} tests`);
    console.log('duration: ', (end - start) / 2);
  });
});

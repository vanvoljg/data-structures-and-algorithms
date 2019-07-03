'use strict';

const flagSort = require('../flag-sort.js');

describe('flagSort algorithm', () => {
  it('should sort an array correctly', () => {
    const inputArray = ['Blue', 'Blue', 'White', 'Blue', 'White', 'Shield', 'White', 'White', 'Blue'];
    const outputArray = ['Blue', 'Blue', 'White', 'White', 'Shield', 'White', 'White', 'Blue', 'Blue'];
    flagSort(inputArray);
    expect(inputArray).toEqual(outputArray);
  });
});

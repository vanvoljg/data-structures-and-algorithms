'use strict';

const arrayReverse = require('../array-reverse-multiple.js');

describe('Array reverse methods', () => {

  Object.keys(arrayReverse).forEach((method) => {
    it(`using the ${method} method`, () => {
      const inputArray = [1, 2, 4, 5, 7];
      const outputArray = [7, 5, 4, 2, 1];
      expect(arrayReverse[method](inputArray)).toEqual(outputArray);
    });
  });
});

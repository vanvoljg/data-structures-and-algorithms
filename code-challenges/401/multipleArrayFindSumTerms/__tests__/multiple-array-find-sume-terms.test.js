'use strict';

const findSumTerms = require('../multiple-array-find-sum-terms.js');

describe('Find two terms in an array which add to equal a given value', () => {
  Object.keys(findSumTerms).forEach((method) => {
    const inputArray = [2, 3, 4, 6];
    const arrayOfSums = [5, 6, 7, 8, 9, 10];
    describe(`Using the ${method} method`, () => {
      it ('returns null on arrays of length < 2', ()=> {
        expect(findSumTerms[method]([], 4)).toBeNull();
        expect(findSumTerms[method]([2], 2)).toBeNull();
      });
      arrayOfSums.forEach((sum) => {
        it(`Checking input array ${inputArray}, sum ${sum}`, () => {
          const outputArray = findSumTerms[method](inputArray, sum);
          const outputSum = outputArray.reduce((accumulator, element) => accumulator + element);

          expect(outputSum).toEqual(sum);
        });
      });
    });

  });
});

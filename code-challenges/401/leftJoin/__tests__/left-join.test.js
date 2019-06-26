'use strict';

const leftJoin = require('../left-join.js');

describe('leftJoin function', () => {
  const leftMap = new Map([
    ['fond', 'enamored'],
    ['wrath', 'anger'],
    ['diligent', 'employed'],
    ['outfit', 'garb'],
    ['guide', 'user'],
  ]);
  const rightMap = new Map([
    ['fond', 'averse'],
    ['wrath', 'delight'],
    ['diligent', 'idle'],
    ['guide', 'follow'],
    ['flow', 'jam'],
  ]);

  const outputMap = new Map([
    ['fond', ['enamored', 'averse']],
    ['wrath', ['anger', 'delight']],
    ['diligent', ['employed', 'idle']],
    ['outfit', ['garb', null]],
    ['guide', ['user', 'follow']],
  ]);

  const empty = new Map();

  const emptyRightOutput = new Map([
    ['fond', ['enamored', null]],
    ['wrath', ['anger', null]],
    ['diligent', ['employed', null]],
    ['outfit', ['garb', null]],
    ['guide', ['user', null]],
  ]);

  it('Should properly join the two maps', () => {
    expect(leftJoin(leftMap, rightMap)).toEqual(outputMap);
  });

  it('Should be able to deal with non-map input by throwing an error', () => {
    expect(() => {
      leftJoin('fish', 4);
    }).toThrow();
  });

  it('Should work with empty left map', () => {
    expect(leftJoin(empty, rightMap)).toEqual(empty);
  });

  it('...or right', () => {
    expect(leftJoin(leftMap, empty)).toEqual(emptyRightOutput);
  });
});

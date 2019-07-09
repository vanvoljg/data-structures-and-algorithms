'use strict';

const {
  treeIntersection,
} = require('../tree-intersection.js');

describe('treeIntersection function', () => {
  const tree1 = {
    root: {
      value: 5,
      left: {
        value: 15,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        value: 10,
        left: {
          value: 8,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    },
  };
  const tree2 = {
    root: {
      value: 5,
      left: {
        value: 13,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: null,
          right: null,
        },
      },
      right: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 7,
          left: null,
          right: null,
        },
      },
    },
  };
  const intersectionSet = new Set([5, 4, 10, 7]);
  it('should find the intersection of two trees and return a Set', () => {
    const outputSet = treeIntersection(tree1, tree2);
    expect(outputSet).toEqual(intersectionSet);
  });
});

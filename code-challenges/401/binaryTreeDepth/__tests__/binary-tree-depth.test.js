'use strict';

let binarySearchDepth = require('../binary-tree-depth.js');

describe('binaryTreeDepth function', () => {

  /*
  Tree structure:
          8         Depth 0
      9      15           1
   10  12       13        2
             14           3
   */

  let tree = {
    value: 8,
    left: {
      value: 9,
      left: {
        value: 10,
        left: null,
        right: {
          value: 12,
          left: null,
          right: null,
        }
      },
      right: null,
    },
    right: {
      value: 15,
      left: null,
      right: {
        value: 13,
        left: {
          value: 14,
          left: null,
          right: null,
        },
        right: null,
      },
    }
  };

  it('should find depths of values', () => {

    expect(binarySearchDepth(tree, 13)).toEqual(2);
    expect(binarySearchDepth(tree, 8)).toEqual(0);

  });

});

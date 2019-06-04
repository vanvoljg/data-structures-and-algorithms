'use strict';

let fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('tree-based fizz-buzz', () => {

  let tree = {
    root: {
      value: 25,
      left: {
        value: 10,
        left: {
          value: 8,
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
        value: 5,
        left: {
          value: 15,
          left: null,
          right: null,
        },
        right: null,
      },
    },
  };

  it('true test', () => {
    expect(() => {fizzBuzzTree(tree.root);}).not.toThrow();
  });
});

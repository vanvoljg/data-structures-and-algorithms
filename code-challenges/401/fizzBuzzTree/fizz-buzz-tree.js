'use strict';

module.exports = function fizzBuzzTree(root) {

  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'FizzBuzz';
  } else if (root.value % 5 === 0) {
    root.value = 'Buzz';
  } else if (root.value % 3 === 0) {
    root.avlue = 'Fizz';
  }

  if (root.left) {
    return fizzBuzzTree(root.left);
  }
  if (root.right) {
    return fizzBuzzTree(root.right);
  }
};

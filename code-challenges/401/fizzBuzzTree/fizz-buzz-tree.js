'use strict';

module.exports = function fizzBuzzTree(root) {

  if (root.value % 3 === 0 && root.value % 5 === 0) {
    root.value = 'FizzBuzz';
  } else if (root.value % 5 === 0) {
    root.value = 'Buzz';
  } else if (root.value % 3 === 0) {
    root.value = 'Fizz';
  }

  if (root.left) {
    fizzBuzzTree(root.left);
  }
  if (root.right) {
    fizzBuzzTree(root.right);
  }
};

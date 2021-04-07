const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
// console.log(assertArraysEqual([1, 2, 3, 4], [3, 2, 1, 0])); // => false
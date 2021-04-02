// Our map function will take in two arguments:

// An array to map
// A callback function
// The map function will return a new array based on the results of the callback function.

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1 [i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);

assertArraysEqual(["g", "c", "t", "m", "t"], results1); // => should PASS
assertArraysEqual(["ground", "control", "to", "major", "tom"], words); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3], results1); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 3], results1); // => true
assertArraysEqual([1, 2, 3, 4], [3, 2, 1, 0], results1); // => false
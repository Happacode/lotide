const eqArrays = function(actual, expected) {
  if (actual.length === expected.length) {
    let perMatch = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        perMatch = false;
      }
    }
    if (perMatch) {
      return true;
    } else {
      return false;
    }
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3, 4], [3, 2, 1, 0])); // => false
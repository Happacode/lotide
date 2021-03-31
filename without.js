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

const without = function(source, itemsToRemove) {
  let subset = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[0]) {
      subset.push(source[i]);
      
    }
  }
  return subset;
};

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
console.log(assertArraysEqual(words, [1, 2, 3])); // => should subset
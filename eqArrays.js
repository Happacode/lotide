const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ ✅ ✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 🛑 🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true)); // => false
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)); // => true
console.log(assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true)); // => false
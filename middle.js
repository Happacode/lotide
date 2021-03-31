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

const middle = function(array) {
  let midElement = Math.floor(array.length / 2);
  if (array.length <= 2) {
    console.log([]);
  } else if (array.length % 2 === 0) {
    console.log([array[midElement - 1]], [array[midElement]]);
  } else {
    console.log([array[midElement]]);
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// console.log(assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
// console.log(assertArraysEqual(middle([1]))); // => []
// console.log(assertArraysEqual(middle([1, 2]))); // => []
// console.log(assertArraysEqual(middle([1, 2, 3]))); // => [2]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]))); // => [3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4]))); // => [2, 3]
// console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]))); // => [3, 4](assertArraysEqual)
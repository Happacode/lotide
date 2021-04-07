
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('#middle', () => {
  it("should return [] for an array with a length less than 3", () => {
    assert.deepEqual(middle([1, 2], []));
  });
  it("should return the two center elements for an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6], [3, 4]));
  });
  it("should return the center element from an odd numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5], [3]));
  });
});

// assertArraysEqual(middle([1])); // => []
// assertArraysEqual(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2, 3])); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5])); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4](assertArraysEqual)

const assert = require('chai').assert
const middle = require('../middle');


describe('#middle', () => {
  it("should return [] for an array with a length less than 3", () => {
    assert.strictEqual(middle([1], []));
  })
  it("should return the two center elements for an even numbered array", () => {
    assert.deepEqual(middle([1, 2, 3, 4], [2, 3]));
  })
  it("should return the center element from a odd numbered array", () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5], [3]));
  });
});

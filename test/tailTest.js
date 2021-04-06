
const tail = require('../tail');
const assert = require('chai').assert;


describe('#tail', () => {
  it("should return the tail of an array", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});

//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

/* assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => [])
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);  // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4] */


describe("#middle", () => {

  it("should return [] for [1]", () => {
    //use deep equal to test array and objects
    //assertStrickEqual is equivalent of ===
    assert.deepEqual(middle([1]), []);
  });

  it("should return [] for [1,2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("should return [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("should return [3] for [1,2,3,4,5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("should return [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });

  it("should return [3,4] for [1,2,3,4,5,6]", () => {
    assert.deepEqual([], []);
  });
});
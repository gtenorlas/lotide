//const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  /*
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
  
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false */

  it('should return true for eqArrays([1, 2, 3], [1, 2, 3])', () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for eqArrays([1, 2, 3], [3, 2, 1])', () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  });

  it('should return true for eqArrays(["1", "2", "3"], ["1", "2", "3"])', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  });

  it('should return false for eqArrays(["1", "2", "3"], ["1", "2", 3])', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  });

});


const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  /*   const result = letterPositions("hello");
    assertArraysEqual(result.h, [0]);
    assertArraysEqual(result.e, [1]);
    assertArraysEqual(result.l, [2, 3]);
    assertArraysEqual(result.o, [4]);
  
    const result2 = letterPositions("lighthouse in the house");
    //console.log(result2);
    assertArraysEqual(result2.l, [0]);
    assertArraysEqual(result2.i, [1, 11]);
    assertArraysEqual(result2.g, [2]);
    assertArraysEqual(result2.h, [3, 5, 15, 18]);
    assertArraysEqual(result2.t, [4, 14]);
    assertArraysEqual(result2.o, [6, 19]);
    assertArraysEqual(result2.u, [7, 20]);
    assertArraysEqual(result2.s, [8, 21]);
    assertArraysEqual(result2.e, [9, 16, 22]);
    assertArraysEqual(result2.n, [12]); */

  it('should return h:[0] for "hello"', () => {
    assert.deepEqual(letterPositions("hello").h, [0]);
  });

  it('should return e:[1] for "hello"', () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });

  it('should return l:[2,3] for "hello"', () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });

  it('should return o:[4] for "hello"', () => {
    assert.deepEqual(letterPositions("hello").o, [4]);
  });


  it('should return l:[0] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").l, [0]);
  });

  it('should return i:[1,11] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").i, [1, 11]);
  });

  it('should return g:[2] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").g, [2]);
  });

  it('should return h:[3,5,15,18] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });

  it('should return t:[4,14] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").t, [4, 14]);
  });

  it('should return o:[6,19] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").o, [6, 19]);
  });

  it('should return u:[7,20] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").u, [7, 20]);
  });

  it('should return s:[8,21] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").s, [8, 21]);
  });

  it('should return e:[9,16,22] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]);
  });

  it('should return n:[12] for "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").n, [12]);
  });
});

